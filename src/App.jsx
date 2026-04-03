import Heading from "./components/Heading";
import HtmlIntro from "./components/HtmlIntro";
import InternetBasics from "./components/InternetBasics";
import TagList from "./components/TagList";

export default function App(){
    return(
        <div>
            <Heading />
            <InternetBasics />
            <HtmlIntro />
            <TagList />
        </div>
    );
}