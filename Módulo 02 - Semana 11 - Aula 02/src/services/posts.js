const posts = [
 {
  category: "Javascript",
  children: [
   {
    title: "Promises",
    path: "/javascript/promises",
    date: "18/03/2024"
   },
   {
    title: "Fetch",
    path: "/javascript/fetch",
    date: "18/03/2024"
   },
   {
    title: "Browser API",
    path: "/javascript/browser-api",
    date: "18/03/2024"
   },
   {
    title: "Local Storage",
    path: "/javascript/local-storage",
    date: "18/03/2024"
   },
   {
    title: "JSON",
    path: "/javascript/json",
    date: "18/03/2024"
   }
  ]
 },
 {
  category: "React",
  children: [
   {
    title: "Hooks",
    path: "/react/hooks",
    date: "18/03/2024"
   },
   {
    title: "Componentes controlados e não controlados",
    path: "/react/componentes-controlados-e-nao-controlados",
    date: "18/03/2024"
   },
   {
    title: "Efeito colateral",
    path: "/react/efeito-colateral",
    date: "18/03/2024"
   }
  ]
 }
];

export const getPosts = () => posts;
