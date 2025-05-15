import Header from "./header";
import { useParams } from "react-router";


export default function RaceTo(){
  const movies = [{
    id: 1,
    title: "Race To Witch Mountain",
    description: "Jack, a taxi driver, finds himself helping two aliens who appear to look like human children and claim that they trying to save Earth and themselves from Siphon, a dangerous killer from outer space.",
    image: "/race-to-witch-mountain.png",
    rating: "⭐⭐⭐",
    trailer: 'https://www.youtube.com/embed/SWDecwm1-GM?si=yNqGv53xILDDnc5A'
  },
  {
    id: 2,
    title: "Jack The Giant Slayer",
    description: "Jack, a young farmhand, must save Princess Isabelle from the giants after one of the magic beans that a monk gives him in exchange of his horse sprouts a giant beanstalk into the realm of the giants.",
    image: "/giant.png",
    rating: "⭐⭐⭐",
    trailer:"https://www.youtube.com/embed/tMmggSs5esg?si=MvOwCMMqcSwnOhSG"
    
  },
  
  {
    id: 3,
    title: "Alchemy Of Souls",
    description: "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
    image: "/souls.png",
    rating: "⭐⭐⭐⭐",
    trailer: "https://www.youtube.com/embed/nlRw1CGbFU0?si=fkrkcVtw_nFTGY0_"
  },
  {
    id: 4,
    title: "IRIS",
    description: "Blood brothers Kim Hyun-jun and Jin Sa-woo are both recruited into the National Security Service, where they both fall for the team leader, Choi Seung-hee. Their relationship begins to change following the appearance of an organization known as IRIS.",
    image: "/IRIS.png",
    rating: "⭐⭐⭐⭐⭐⭐",
    trailer: 'https://www.youtube.com/embed/YZYBmW6pNIk?si=nFg3pttTxKGL4OtP'
  },
  {
    id: 5,
    title: "The K2",
    description: "After a disgraced soldier returns to South Korea, he gets hired as a bodyguard by the presidential candidate's wife. Thereafter, he takes the opportunity to plot revenge against those who wronged him.",
    image: "/K2.png",
    rating: "⭐⭐⭐⭐⭐",
    trailer: 'https://www.youtube.com/embed/U6GELNX7Y94?si=YSVUkvx19-9VUbVU'
  },
  
  {
    id: 6,
    title: "Yong-Pal",
    description: "A surgeon decides to operate as a doctor for the corrupt and criminal in order to pay for his sister's medical bills. He becomes enmeshed in a dark conspiracy involving a chaebol heiress forcibly put in a medically induced coma.",
    image: "/Yong-pal.png",
    rating: "⭐⭐⭐⭐",
    trailer: 'https://www.youtube.com/embed/pXSNqtiHr1E?si=Y2DBEBEqdtZuyY_h'
  }
  ];
  
const {id} = useParams();
console.log(useParams())
// console.log(parseInt(id))
// console.log(typeof id)
const movie = movies.find(movie => movie.id === parseInt(id))
// {console.log(movie)}
// if(!movie) return <p> movie not found!</p>
  
  return(
    <div className="return-trailer">
        <Header />  
        <div className="trailer">
              <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      <div className="content">
       <p className="content-header">
        {movie.title}
       </p>
        {movie.description}
        </div>
    </div>
  );
}