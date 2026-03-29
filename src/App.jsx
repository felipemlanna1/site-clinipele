import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Phone, WhatsappLogo, MapPin, Clock, Star, List, X, ArrowRight,
  CaretDown, CaretLeft, CaretRight, Envelope, InstagramLogo,
  Stethoscope, Syringe, Scissors, Eye, MagnifyingGlass,
  Sparkle, UserCircle, CheckCircle, ShieldCheck, CalendarBlank,
  Heart, FirstAidKit
} from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548991259028?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clinipele.'
const TEL = 'tel:+554832224438'

function useOnView() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return [ref, inView]
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

/* ==================== NAVBAR ==================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Corpo Clínico', href: '#medicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo">
          <img src="./images/logo.png" alt="Clinipele" />
        </a>
        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav__cta">
            <WhatsappLogo size={16} weight="duotone" /> Agendar
          </a>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} weight="duotone" /> : <List size={26} weight="duotone" />}
        </button>
      </div>
    </nav>
  )
}

/* ==================== HERO ==================== */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <img src="./images/hero.jpg" alt="Clinipele Amorim Dermatologia" />
        <div className="hero__overlay" />
      </div>
      <div className="container hero__content">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="section-label" style={{ color: 'white' }}>
            Desde 1994 em Florianópolis
          </motion.span>
          <motion.h1 variants={fadeUp} className="hero__title">
            Sua Pele em<br/><span className="hero__accent">Boas Mãos</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero__sub">
            Mais de 20 anos de excelência em dermatologia clínica, cirúrgica e estética.
            Família Amorim — tradição e inovação na saúde da sua pele.
          </motion.p>
          <motion.div variants={fadeUp} className="hero__actions">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--teal">
              <WhatsappLogo size={20} weight="duotone" /> Agendar Consulta
            </a>
            <a href="#tratamentos" className="btn btn--white-outline">
              Nossos Tratamentos <ArrowRight size={16} weight="duotone" />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero__badges">
            <div className="hero__badge"><Star size={16} weight="fill" /> 4.6 Google</div>
            <div className="hero__badge"><UserCircle size={16} weight="duotone" /> 200+ avaliações</div>
            <div className="hero__badge"><ShieldCheck size={16} weight="duotone" /> Convênios</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== ABOUT ==================== */
function About() {
  const [ref, inView] = useOnView()
  return (
    <section className="about section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="about__grid">
          <div className="about__text">
            <motion.span variants={fadeUp} className="section-label">Quem Somos</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Tradição Familiar em<br/><span className="accent">Dermatologia</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Fundada pelo Dr. Roberto Moreira Amorim, a Clinipele começou como um sonho
              de oferecer dermatologia de excelência em Florianópolis. Com a chegada dos
              filhos Roberto Filho, Ramon e Rafael — todos médicos dermatologistas — a
              clínica se tornou referência no Sul do Brasil.
            </motion.p>
            <motion.p variants={fadeUp} style={{ marginTop: '12px' }}>
              Hoje, a tradição continua com a nova geração, incluindo Dr. Gustavo e
              Dra. Bruna, unindo décadas de experiência com as técnicas mais modernas
              da dermatologia.
            </motion.p>
            <motion.div variants={fadeUp} className="about__stats">
              <div className="about__stat">
                <strong>30+</strong>
                <span>Anos de história</span>
              </div>
              <div className="about__stat">
                <strong>8</strong>
                <span>Especialistas</span>
              </div>
              <div className="about__stat">
                <strong>3</strong>
                <span>Gerações</span>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="about__img">
            <img src="./images/hero.jpg" alt="Clinipele" style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover', height: '100%' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== SERVICES ==================== */
const treatments = [
  { icon: Stethoscope, title: 'Consulta Dermatológica', desc: 'Avaliação completa de doenças da pele, mucosas, cabelos e unhas — adultos e crianças.' },
  { icon: Syringe, title: 'Toxina Botulínica', desc: 'Tratamento e atenuação de rugas com aplicação de toxina botulínica de última geração.' },
  { icon: Sparkle, title: 'Preenchimento Facial', desc: 'Ácido hialurônico para sulcos, olheiras, lábios e harmonização global da face.' },
  { icon: Scissors, title: 'Cirurgia Dermatológica', desc: 'Procedimentos cirúrgicos diagnósticos e terapêuticos realizados sob anestesia local.' },
  { icon: Eye, title: 'Dermoscopia Digital', desc: 'Avaliação de lesões pigmentadas, mapeamento corporal total e tricoscopia.' },
  { icon: MagnifyingGlass, title: 'Microagulhamento', desc: 'Indução percutânea de colágeno para melasma, cicatrizes de acne e rejuvenescimento.' },
  { icon: Heart, title: 'Laser Fracionado', desc: 'Rejuvenescimento facial com laser de última geração para manchas e flacidez.' },
  { icon: FirstAidKit, title: 'Peelings Químicos', desc: 'Renovação celular com peelings personalizados para cada tipo de pele.' },
]

function Services() {
  const [ref, inView] = useOnView()
  return (
    <section id="tratamentos" className="services section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="services__header">
          <motion.span variants={fadeUp} className="section-label">Tratamentos</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Dermatologia Completa<br/><span className="accent">Para Você</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: '560px', margin: '0 auto' }}>
            Do diagnóstico ao tratamento estético, oferecemos soluções dermatológicas completas.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="services__grid">
          {treatments.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="svc-card">
              <div className="svc-card__icon"><t.icon size={28} weight="duotone" /></div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--teal">
            <WhatsappLogo size={20} weight="duotone" /> Agendar Tratamento
          </a>
        </div>
      </div>
    </section>
  )
}

/* ==================== TEAM ==================== */
const doctors = [
  { name: 'Dr. Roberto M. Amorim Filho', role: 'Dermatologista — Cirurgia Dermatológica', img: './images/dr-roberto-filho.jpg' },
  { name: 'Dr. Ramon Amorim', role: 'Dermatologista', img: './images/dr-ramon.jpg' },
  { name: 'Dr. Rafael Amorim', role: 'Dermatologista', img: './images/dr-rafael.jpg' },
  { name: 'Dr. Gustavo M. Amorim', role: 'Dermatologista — Dermatopatologia', img: './images/dr-gustavo.jpg' },
  { name: 'Dra. Bruna D. B. Amorim', role: 'Dermatologista', img: './images/dra-bruna.jpg' },
]

function Team() {
  const [ref, inView] = useOnView()
  return (
    <section id="medicos" className="team section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__header">
          <motion.span variants={fadeUp} className="section-label">Corpo Clínico</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Família Amorim —<br/><span className="accent">Sua Confiança</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__grid">
          {doctors.map((d, i) => (
            <motion.div key={i} variants={fadeUp} className="doc-card">
              <div className="doc-card__img"><img src={d.img} alt={d.name} /></div>
              <h3>{d.name}</h3>
              <p>{d.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== DIFFERENTIALS ==================== */
const diffs = [
  { num: '01', title: 'Tradição Familiar', desc: 'Três gerações de dermatologistas dedicados à saúde da sua pele.' },
  { num: '02', title: 'Tecnologia Avançada', desc: 'Dermoscopia digital, laser fracionado e equipamentos de última geração.' },
  { num: '03', title: 'Convênios Aceitos', desc: 'Atendemos Unimed, GEAP e a maioria dos planos de saúde do mercado.' },
  { num: '04', title: 'Localização Central', desc: 'No 13º andar do Ed. Planel Tower II, no coração de Florianópolis.' },
]

function Differentials() {
  const [ref, inView] = useOnView()
  return (
    <section id="diferenciais" className="diffs section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.span variants={fadeUp} className="section-label">Diferenciais</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Por Que Escolher a<br/><span className="accent">Clinipele</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="diffs__grid">
          {diffs.map((d, i) => (
            <motion.div key={i} variants={fadeUp} className="diff-card">
              <span className="diff-card__num">{d.num}</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== TESTIMONIALS ==================== */
const reviews = [
  { text: 'Família Amorim é sinônimo de competência em dermatologia. Me sinto segura e bem cuidada há mais de 10 anos.', author: 'Carla M.', role: 'Paciente' },
  { text: 'O Dr. Ramon foi extremamente atencioso. Resolveu um problema de pele que eu carregava há anos com muito profissionalismo.', author: 'Lucas T.', role: 'Paciente' },
  { text: 'Fiz preenchimento com a Dra. Bruna e o resultado ficou super natural. Clínica impecável e equipe acolhedora.', author: 'Mariana S.', role: 'Paciente' },
]

function Testimonials() {
  const [ref, inView] = useOnView()
  const [cur, setCur] = useState(0)
  useEffect(() => { const t = setInterval(() => setCur(c => (c+1) % reviews.length), 5000); return () => clearInterval(t) }, [])

  return (
    <section className="testi section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={{ textAlign: 'center' }}>
          <motion.span variants={fadeUp} className="section-label" style={{ justifyContent: 'center' }}>Depoimentos</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Nossos Pacientes <span className="accent">Recomendam</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="testi__card">
          <div className="testi__stars">{[...Array(5)].map((_,i) => <Star key={i} size={18} weight="fill" />)}</div>
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="testi__text">"{reviews[cur].text}"</p>
              <strong>{reviews[cur].author}</strong>
              <span className="testi__role">{reviews[cur].role}</span>
            </motion.div>
          </AnimatePresence>
          <div className="testi__dots">
            {reviews.map((_,i) => <button key={i} className={`testi__dot ${i===cur?'active':''}`} onClick={() => setCur(i)} aria-label={`Depoimento ${i+1}`} />)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CTA ==================== */
function CTA() {
  const [ref, inView] = useOnView()
  return (
    <section className="cta">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="cta__inner">
          <motion.h2 variants={fadeUp}>Cuide da Saúde da<br/><span style={{ color: 'white' }}>Sua Pele Hoje</span></motion.h2>
          <motion.p variants={fadeUp}>Agende sua consulta com especialistas que entendem de pele há mais de 30 anos.</motion.p>
          <motion.div variants={fadeUp} className="cta__buttons">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              <WhatsappLogo size={20} weight="duotone" /> Agendar pelo WhatsApp
            </a>
            <a href={TEL} className="btn btn--white-outline">
              <Phone size={20} weight="duotone" /> (48) 3222-4438
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CONTACT ==================== */
function Contact() {
  const [ref, inView] = useOnView()
  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="contact__grid">
          <div className="contact__info">
            <motion.span variants={fadeUp} className="section-label">Contato</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Fale<br/><span className="accent">Conosco</span></motion.h2>
            <motion.div variants={fadeUp} className="contact__items">
              <div className="contact__item">
                <WhatsappLogo size={22} weight="duotone" style={{ color: 'var(--teal)' }} />
                <div><strong>WhatsApp</strong><a href={WA} target="_blank" rel="noopener noreferrer">(48) 99125-9028</a></div>
              </div>
              <div className="contact__item">
                <Phone size={22} weight="duotone" style={{ color: 'var(--teal)' }} />
                <div><strong>Telefone</strong><a href={TEL}>(48) 3222-4438</a></div>
              </div>
              <div className="contact__item">
                <Envelope size={22} weight="duotone" style={{ color: 'var(--teal)' }} />
                <div><strong>E-mail</strong><span>clinipeledermatologia@gmail.com</span></div>
              </div>
              <div className="contact__item">
                <MapPin size={22} weight="duotone" style={{ color: 'var(--teal)' }} />
                <div><strong>Endereço</strong><span>Av. Rio Branco, 404 — Ed. Planel Tower II<br/>13º andar — Centro, Florianópolis/SC</span></div>
              </div>
              <div className="contact__item">
                <Clock size={22} weight="duotone" style={{ color: 'var(--teal)' }} />
                <div><strong>Horário</strong><span>Seg a Sex — 7h às 20h</span></div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5502!3d-27.5945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sClinipele!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%" height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '400px' }}
              allowFullScreen loading="lazy"
              title="Localização Clinipele"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="./images/logo.png" alt="Clinipele" className="footer__logo" />
          <p>Amorim Dermatologia — tradição e excelência em cuidados com a pele desde 1994.</p>
        </div>
        <div className="footer__col">
          <h4>Tratamentos</h4>
          <a href="#tratamentos">Dermatologia Clínica</a>
          <a href="#tratamentos">Cirurgia Dermatológica</a>
          <a href="#tratamentos">Estética</a>
          <a href="#tratamentos">Dermoscopia</a>
        </div>
        <div className="footer__col">
          <h4>Contato</h4>
          <a href={WA} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
          <a href={TEL}><Phone size={14} weight="duotone" /> (48) 3222-4438</a>
          <a href="mailto:clinipeledermatologia@gmail.com"><Envelope size={14} weight="duotone" /> E-mail</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; 2026 Clinipele Amorim Dermatologia. Todos os direitos reservados.</p>
        <p>CRM/SC — Av. Rio Branco, 404, Ed. Planel Tower II, 13º andar — Centro, Florianópolis/SC</p>
      </div>
    </footer>
  )
}

function FloatingWA() {
  return <a href={WA} target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="WhatsApp"><WhatsappLogo size={30} weight="fill" /></a>
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section><About /></section>
      <section><Services /></section>
      <section><Team /></section>
      <section><Differentials /></section>
      <section><Testimonials /></section>
      <section><CTA /></section>
      <section><Contact /></section>
      <Footer />
      <FloatingWA />
    </>
  )
}

export default App
