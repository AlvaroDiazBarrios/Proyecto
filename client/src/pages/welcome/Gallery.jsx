import { Galleria } from "primereact/galleria"
import image1 from '../assets/gallery/1.png'
import image2 from '../assets/gallery/2.png'
import image3 from '../assets/gallery/3.png'
import image4 from '../assets/gallery/4.png'

export const Gallery = () => {

    const imagenes = [
        {
            itemImageSrc: image1
        },
        {
            itemImageSrc: image2
        },
        {
            itemImageSrc: image3
        },
        {
            itemImageSrc: image4
        }
    ]

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }
    return (
        <Galleria style={{ width: '100%' }} value={imagenes} changeItemOnIndicatorHover showThumbnails={false} showIndicators indicatorsPosition="left" showIndicatorsOnItem item={itemTemplate} circular autoPlay transitionInterval={3000} />
    )
}