"use client";
import React from "react";

const Section = ({id,title,children}:{id:string,title:string,children:React.ReactNode})=>(
  <section id={id} className="py-12">
    <div className="mx-auto max-w-4xl px-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="section-card">{children}</div>
    </div>
  </section>
);

export default function Page(){
  return (
    <main>
      <header className="p-4 border-b border-white/10 flex items-center justify-between backdrop-blur bg-zinc-950/40">
        <div className="font-black text-xl">sol<span className="text-amber-300">.</span>ia</div>
        <nav className="space-x-4 text-sm text-zinc-300">
          <a href="#contracts" className="hover:text-white transition">Contratos</a>
          <a href="#review" className="hover:text-white transition">Revisión</a>
          <a href="#pricing" className="hover:text-white transition">Precios</a>
          <a href="#terms" className="hover:text-white transition">Términos</a>
        </nav>
      </header>
      <Section id="contracts" title="Generador de contratos">
        <p>Formulario para generar contratos personalizados (demo).</p>
      </Section>
      <Section id="review" title="Revisión de contrato">
        <p>Analiza automáticamente riesgos y cláusulas ausentes.</p>
      </Section>
      <Section id="pricing" title="Precios (estimados)">
        <p>Cálculo dinámico según usuarios y documentos/mes.</p>
      </Section>
      <Section id="terms" title="Términos y condiciones">
        <div className="space-y-3 text-sm text-zinc-300">
          <p>El uso de sol.ia implica la aceptación de los presentes términos y condiciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>La plataforma se ofrece "tal cual", sin garantías explícitas o implícitas.</li>
            <li>El usuario es responsable de los contratos generados y de su revisión jurídica final.</li>
            <li>Se aplican estándares de confidencialidad y normativas de protección de datos (RGPD).</li>
            <li>No se permite uso fraudulento, abusivo o con fines ilícitos.</li>
            <li>El servicio podrá incluir integración con tokens ("Soles Digitales"); su uso se rige por tokenomics internos.</li>
            <li>Los precios y planes pueden variar; se notificará a los usuarios antes de cambios relevantes.</li>
            <li>Para cualquier disputa se aplicará la legislación española y jurisdicción de Madrid.</li>
          </ul>
        </div>
      </Section>
      <footer className="py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} sol.ia — Todos los derechos reservados.
      </footer>
    </main>
  )
}
