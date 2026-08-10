"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_5uju1vv";
const TEMPLATE_ID = "template_40mxfkx";
const PUBLIC_KEY = "7qsOyi8R49pPPIJri";

const info = [
  {
    icon: <FiPhone />,
    label: "Telefone",
    value: "(+55) 62 99200-2421",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "brennoalencar79@gmail.com",
  },
  {
    icon: <FiMapPin />,
    label: "Localização",
    value: "Goiânia, Goiás — Brasil",
  },
];

const services = [
  "Desenvolvimento Web",
  "Aplicação Full Stack",
  "Landing Page",
  "UI/UX Design",
  "Consultoria Frontend",
];

const EMPTY_FORM = {
  nome: "",
  sobrenome: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

const EMPTY_ERRORS = {
  nome: "",
  sobrenome: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

// ordem em que os campos devem ser verificados/focados
const FIELD_ORDER = [
  "nome",
  "sobrenome",
  "email",
  "telefone",
  "servico",
  "mensagem",
];

// regex simples para validar formato de email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// aceita formatos como (62) 99200-2421, 62992002421, +55 62 99200-2421 etc.
const PHONE_REGEX = /^[\d\s()+-]{8,20}$/;

const Contato = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // refs para cada campo, usados para mover o foco automaticamente
  const fieldRefs = {
    nome: useRef(null),
    sobrenome: useRef(null),
    email: useRef(null),
    telefone: useRef(null),
    servico: useRef(null),
    mensagem: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // limpa o erro do campo assim que o usuário começa a corrigi-lo
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = (data) => {
    const newErrors = { ...EMPTY_ERRORS };

    if (!data.nome.trim()) {
      newErrors.nome = "Informe seu nome.";
    }

    if (!data.sobrenome.trim()) {
      newErrors.sobrenome = "Informe seu sobrenome.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Informe seu email.";
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      newErrors.email = "Informe um email válido.";
    }

    if (!data.telefone.trim()) {
      newErrors.telefone = "Informe seu telefone.";
    } else if (!PHONE_REGEX.test(data.telefone.trim())) {
      newErrors.telefone = "Informe um telefone válido.";
    }

    if (!data.servico) {
      newErrors.servico = "Selecione um serviço.";
    }

    if (!data.mensagem.trim()) {
      newErrors.mensagem = "Escreva sua mensagem.";
    }

    return newErrors;
  };

  // encontra o primeiro campo com erro (respeitando a ordem do formulário)
  // e move o foco do teclado/cursor até ele
  const focusFirstError = (validationErrors) => {
    const firstErrorField = FIELD_ORDER.find(
      (fieldName) => validationErrors[fieldName],
    );

    if (firstErrorField && fieldRefs[firstErrorField]?.current) {
      fieldRefs[firstErrorField].current.focus();
      // scroll suave até o campo, útil em telas menores/formulários longos
      fieldRefs[firstErrorField].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "");

    if (hasErrors) {
      setErrors(validationErrors);
      setStatus("idle");
      focusFirstError(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nome: form.nome,
          sobrenome: form.sobrenome,
          email: form.email,
          telefone: form.telefone,
          servico: form.servico,
          mensagem: form.mensagem,
        },
        PUBLIC_KEY,
      );

      setStatus("success");
      setForm(EMPTY_FORM);
      setErrors(EMPTY_ERRORS);
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setStatus("error");
    }
  };

  // helper para aplicar borda vermelha em campos com erro
  const fieldClass = (fieldName) =>
    `bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border focus:outline-none transition-colors duration-300 ${
      errors[fieldName]
        ? "border-red-500/70 focus:border-red-500"
        : "border-white/5 focus:border-accent/50"
    }`;

  return (
    <section className="flex flex-col justify-center py-8 xl:py-6">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* formulário */}
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
            className="flex-1 bg-[#1c1c22] rounded-2xl p-6 xl:p-8 flex flex-col gap-4 border border-white/5"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl xl:text-3xl font-bold text-accent leading-tight">
                Vamos trabalhar juntos
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-[420px]">
                Tem um projeto em mente? Preencha o formulário e entro em
                contato o quanto antes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <input
                  ref={fieldRefs.nome}
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Nome *"
                  className={fieldClass("nome")}
                />
                {errors.nome && (
                  <span className="text-red-400 text-xs px-1">
                    {errors.nome}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  ref={fieldRefs.sobrenome}
                  name="sobrenome"
                  value={form.sobrenome}
                  onChange={handleChange}
                  placeholder="Sobrenome *"
                  className={fieldClass("sobrenome")}
                />
                {errors.sobrenome && (
                  <span className="text-red-400 text-xs px-1">
                    {errors.sobrenome}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  ref={fieldRefs.email}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  type="email"
                  className={fieldClass("email")}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs px-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  ref={fieldRefs.telefone}
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="Telefone *"
                  type="tel"
                  className={fieldClass("telefone")}
                />
                {errors.telefone && (
                  <span className="text-red-400 text-xs px-1">
                    {errors.telefone}
                  </span>
                )}
              </div>
            </div>

            {/* select */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <select
                  ref={fieldRefs.servico}
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  className={`w-full appearance-none cursor-pointer ${fieldClass("servico")} ${
                    form.servico ? "text-white" : "text-white/60"
                  }`}
                >
                  <option value="" disabled>
                    Selecione um serviço *
                  </option>
                  {services.map((s, i) => (
                    <option
                      key={i}
                      value={s}
                      className="text-white bg-[#232329]"
                    >
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">
                  ▾
                </span>
              </div>
              {errors.servico && (
                <span className="text-red-400 text-xs px-1">
                  {errors.servico}
                </span>
              )}
            </div>

            {/* textarea */}
            <div className="flex flex-col gap-1">
              <textarea
                ref={fieldRefs.mensagem}
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Digite sua mensagem aqui. *"
                rows={4}
                className={`resize-none ${fieldClass("mensagem")}`}
              />
              {errors.mensagem && (
                <span className="text-red-400 text-xs px-1">
                  {errors.mensagem}
                </span>
              )}
            </div>

            {/* feedback de status */}
            {status === "success" && (
              <p className="text-green-400 text-sm">
                ✓ Mensagem enviada com sucesso!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                ✗ Erro ao enviar. Tente novamente.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-fit bg-accent text-primary font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-accent/90 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>
          </motion.form>

          {/* info lateral */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
            className="flex flex-col gap-3 xl:w-[300px] shrink-0 justify-center"
          >
            {info.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-lg shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-white font-medium text-sm leading-snug">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
