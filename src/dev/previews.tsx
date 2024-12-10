import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import CardsNews from "@/CardsNews.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CardsNews">
                <CardsNews/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;