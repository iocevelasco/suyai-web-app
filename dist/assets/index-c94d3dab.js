import{s as i,G as p,c as n,B as r,b as d,a as t,j as s}from"./index-9fcfb018.js";import{t as h,L as y}from"./LadingLayout-c75f1f5c.js";import{T as c,B as u}from"./Header-5c48e7fa.js";const x=i(p)(({theme:e})=>n`
    padding: ${e.spacing(1,9,9,1)};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1080px;
    @media only screen and (max-width: 624px) {
      justify-content: space-around;
      gap: 2rem;
    }
  `),f=i(r,h)(({theme:e,$cardImage:o})=>n`
    margin: ${e.spacing(2)};
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding-top: ${e.spacing(1)};
    background-image: url(${o});
    border-radius: 20px;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: flex-end;
    padding-bottom: ${e.spacing(7)};
    box-sizing: border-box;
    gap: ${e.spacing(2)};
    z-index: 1;
    position: relative;
    background-position-y: 30%;
  `),v=i(r)(({theme:e})=>n`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${d.black} 100%);
    z-index: 2;
  `),b=i(c)(({theme:e})=>n`
    z-index: 4;
    font-weight: 600;
  `),H=i(c)(({theme:e})=>n`
    font-weight: 600;
    font-size: 1rem;
    z-index: 4;
  `),_=[{title:"ENTRAMIENTO",description:`Lunes a Viernes: 7:00Hs a 11:00Hs/ 18Hs A 21Hs 
Sabados 9Hs A 12:00Hs`,img:"https://res.cloudinary.com/dpxe6utid/image/upload/v1678123706/suyai%20assets/Screenshot_2023-03-06_at_14-26-25_SUYAI_FITNESS_CLUB_suyaifitnessclub_Fotos_y_videos_de_Instagram_qbqayr.png",columns:12},{title:"JIU JITSU",description:"Lunes a viernes: 19:00Hs A 20.30Hs",img:"https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/jiu-jitsu_cczrie.jpg",columns:6},{title:"AIKIDO",description:"Lunes, miercoles y viernes: 17:30Hs Y 20.30Hs",img:"https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/aikido_q97vri.jpg",columns:6},{title:"Boxeo recreativo y competitivo",description:"Martes y jueves: DE 10Hs A 11:30Hs, 18.30Hs A 20Hs",img:"https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/boxeo-recreativo-competitivo_rvj9tr.jpg",columns:6},{title:"STRETCHING",description:"Martes 20Hs",img:"https://res.cloudinary.com/dpxe6utid/image/upload/v1678126180/suyai%20assets/stretching_cki0yh.jpg",columns:6}];var g=(e=>(e.ButtonLabel="Solicitar info",e))(g||{});function S(){return t(x,{container:!0,children:_.map(({title:e,img:o,description:l,columns:m})=>t(p,{item:!0,xs:m,children:s(f,{$cardImage:o,children:[t(b,{variant:"h2",children:e}),t(H,{children:l}),t(u,{sx:{zIndex:4},variant:"contained",children:g.ButtonLabel}),t(v,{})]})},e))})}const j=i(r)(({theme:e})=>n`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: ${e.spacing(1)};
  `),T=i(r)(({theme:e})=>n`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: space-around;
    background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1677773937/suyai%20assets/header_gpksh3.jpg)
      center center;
    background-size: cover;
    position: relative;
    top: -1rem;
  `),k=i(r)(({theme:e})=>n`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `),w=i(c)(({theme:e})=>n`
    font-size: 4rem;
    text-align: center;
    color: ${d.white};
    text-transform: uppercase;
  `);function A({title:e,textButton:o,background:l}){return t(T,{children:s(k,{children:[t(w,{variant:"h2",children:e}),t(u,{variant:"contained",children:o})]})})}const B=i(r)(({theme:e})=>n`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: ${e.spacing(6,0,3,0)};
    align-items: center;
    gap: ${e.spacing(5)};
  `);function L({children:e,title:o}){return s(B,{children:[t(c,{variant:"h2",fontSize:"3rem",fontWeight:"300",color:d.white,children:o}),e]})}var a=(e=>(e.HeroTitle="stay hungry",e.HeroButtonText="Clase de prueba gratis",e.TitleActivitiesSection="Activities",e.HeroBackground="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/logo-white-e1599568307152-ov5wy6betpr1eh1ynboavawk3lmtkfdydqfdao9qtc_uex1yn.png",e))(a||{});function C(){return t(y,{children:s(j,{children:[t(A,{title:a.HeroTitle,textButton:a.HeroButtonText,background:a.HeroBackground}),t(L,{title:a.TitleActivitiesSection,children:t(S,{})})]})})}export{C as default};
