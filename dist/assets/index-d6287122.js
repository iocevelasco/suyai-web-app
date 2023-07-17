import{s as o,B as r,c as s,j as e,a as t,u as i}from"./index-9fcfb018.js";import{H as d,T as l,B as c}from"./Header-5c48e7fa.js";const h=o(r)(({theme:a})=>s`
    display: flex;
    flex-direction: column;
    width: 100%;
  `),p=o(r)(({theme:a})=>s`
    display: grid;
    flex-grow: 1;
    row-gap: ${a.spacing(3)};
    column-gap: ${a.spacing(2)};
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    height: 100vh;
    width: 100%;
  `);function u({children:a}){return e(h,{children:[t(d,{}),t(p,{children:a})]})}function x(){const[a,{logout:n}]=i();return e(u,{children:[t(l,{children:"Autenticate dashboard"}),t(r,{sx:{height:300,justifyContent:"center",alignContent:"center",display:"flex"},children:t(c,{onClick:()=>n(),children:"logout"})})]})}export{x as default};
