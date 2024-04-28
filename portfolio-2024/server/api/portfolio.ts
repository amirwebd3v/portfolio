
import projects from "@/server/api/data/portfolio.json";


interface PortfolioType {
  title: string;
  subtitle: string;
  shortDescription: string;
  tasks: string[];
  fullDescription: string;
  techWrapUp: TechWrapUp[];
  images: string[];
}

interface TechWrapUp {
  first: string;
  second: string;
}


export {PortfolioType}



export default defineEventHandler( event => {
  // Handle the API route
  if (event.node.req.url === '/api/portfolio') {
    return projects as PortfolioType[]
  }
})
