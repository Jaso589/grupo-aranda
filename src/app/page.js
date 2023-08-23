import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { generateMetadata, metadata } from './layout'
import AnimatedDiv from '@/components/AnimatedDiv'
import HeroContact from '@/components/HeroContact'

const services = [
  {
    img: '/img/service1.jpg',
    text:'Habitaciones urbanas'
  },
  {
    img: '/img/service2.jpg',
    text:'Obras Industriales'
  },
  {
    img: '/img/service3.jpg',
    text:'Reforzamiento de estructuras'
  },
  {
    img: '/img/service4.jpg',
    text:'Edificaciones inmobiliarias'
  },
]
const item_works = [
  {
    img: '/svg/build_1.svg',
    title: 'Obras entregadas',
    number: '260'
  },
  {
    img: '/svg/exp.svg',
    title: 'Años de experiencia',
    number: '20'
  },{
    img: '/svg/clients.svg',
    title: 'Clientes satisfechos',
    number: '80'
  }
]

const proyectos = [
  {
    img:'/img/project_1.jpg',
    title:'Proyecto GAC 1'
  },
  {
    img:'/img/project_2.jpg',
    title:'Proyecto GAC 2'
  },
  {
    img:'/img/project_3.jpg',
    title:'Proyecto GAC 3'
  },{
    img:'/img/project_4.jpg',
    title:'Proyecto GAC 4'
  },
  {
    img:'/img/project_5.jpg',
    title:'Proyecto GAC 5'
  },
  {
    img:'/img/project_6.jpg',
    title:'Proyecto GAC 6'
  }
]
metadata.title = 'Grupo Aranda | Home'
export default function Home() {
  
  return (
    <>
      <section className={styles.home_page}>
        <div className={styles.bg_dark}>
          <AnimatedDiv>
            <div className='container'>
              <div className={styles.home_content}>
                <h1>Nuestros proyectos te acercan a la <span>exclusividad, accesibilidad y comodidad</span></h1>
                <p>
                Habita con sentido tus espacios para vivienda u oficinas
                </p>
                <button className={'btn_blue'}>
                <Link href={'#proyectos'}>Explorar proyectos</Link>
                </button>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>
      
      <section className={styles.about_home}>
        <AnimatedDiv>
          <div className='container'>
            <div className={styles.about_container}>
              <div className={styles.text_about}>
                <h2>Grupo Aranda Constructores</h2>
                <p>Somos un experimentado equipo de ingenieros, arquitectos y técnicos, ampliamente capacitados. Nos mantenemos a la vanguardia de la tecnología y llevamos a cabo el desarrollo de proyectos de acuerdo a normas y reglamentos vigentes. Por eso, estamos en la capacidad de garantizar a todos nuestros clientes un servicio de calidad con tecnología de vanguardia y un capital humano de primer nivel.</p>
                <p>Somos una empresa integral de capital y talento peruano, dedicada a la implementación de todas las especialidades de ingeniería, así como el mantenimiento preventivo - correctivo de instalaciones y equipamientos.</p>
                <button className='btn_blue'><Link href={'/nosotros'}>Ver más</Link></button>
              </div>
              
              <div className={styles.services_home}>
                {
                  services.map((a) => (
                  <Link href={''} className={styles.service} key={a.text}>
                    <div className={styles.img_div}>
                    <Image className={styles.img_bg} src={a.img} fill alt={a.img}/>
                    </div>
                    <div className={styles.text}>
                      <h3>{a.text}</h3>
                    </div>
                  </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </section>
      <section className={styles.items_home}>
        <div className={styles.cover}></div>
          <div className='container'>
            <div className={styles.number_works}>
              {
                item_works.map((a)=>(
                <div className={styles.item_work} key={a.title}>
                  <Image
                    src={a.img}
                    alt={a.title}
                    width={70}
                    height={70}
                  />
                  <div>
                    <span>{a.number}+</span>
                    <p>{a.title}</p>
                  </div>
                </div>
                ))
              }
          </div>
        </div>
      </section>
      <section className={styles.projects_home} id='proyectos'>
        <AnimatedDiv>
          <div className='container'>
            <h2>Nuestros trabajos</h2>
            <div className={styles.projects_container}>
              {
                proyectos.map((a)=>(
                  <div className={styles.project_card} key={a.title}>
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                    />
                    <div className={styles.cover_card}>
                      <h3>{a.title}</h3>
                      <Link href={'/'}>Ver más</Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </AnimatedDiv>
      </section>
      <HeroContact/>
    </>
  )
}
