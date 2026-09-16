import React,{useEffect,useState} from 'https://esm.sh/react@19.2.0';
  import {createRoot} from 'https://esm.sh/react-dom@19.2.0/client';
  const pages={
    inicio:{label:'Inicio',eyebrow:'ESTUDIO NORTE',title:'Diseño digital con intención.',copy:'Creamos productos web claros, útiles y duraderos para organizaciones que quieren comunicar mejor.'},
    servicios:{label:'Servicios',eyebrow:'LO QUE HACEMOS',title:'Estrategia, identidad y desarrollo.',copy:'Un enfoque simple: entender el problema, ordenar lo esencial y construir una solución medible.'},
    contacto:{label:'Contacto',eyebrow:'HABLEMOS',title:'Un buen proyecto empieza con una conversación.',copy:'Escribinos para conocer tu idea y definir un próximo paso concreto.'}
  };
  function App(){
    const initial=location.hash.slice(1);const [current,setCurrent]=useState(pages[initial]?initial:'inicio');
    useEffect(()=>{const change=()=>{const next=location.hash.slice(1);setCurrent(pages[next]?next:'inicio')};addEventListener('hashchange',change);return()=>removeEventListener('hashchange',change)},[]);
    const go=(key)=>{location.hash=key==='inicio'?'':key;setCurrent(key)};const page=pages[current];const e=React.createElement;
    return e('main',{className:'site'},
      e('header',null,e('a',{className:'brand',href:'#',onClick:(x)=>{x.preventDefault();go('inicio')}},'UCASAL'),
        e('nav',{className:'nav','aria-label':'Navegación principal'},Object.entries(pages).map(([key,item])=>e('button',{key,className:current===key?'active':'',onClick:()=>go(key),'aria-current':current===key?'page':undefined},item.label)))),
      e('section',{className:'hero','aria-labelledby':'title'},e('p',{className:'eyebrow'},page.eyebrow),e('h1',{id:'title'},page.title),e('p',{className:'copy'},page.copy)),
      e('footer',null,e('span',null,'TP 2 · Lenguajes IV · Villagrán Santiago Agustín'),e('span',null,'2026'))
    )
  }
  createRoot(document.getElementById('root')).render(React.createElement(App));