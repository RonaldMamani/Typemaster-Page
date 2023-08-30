export default function ProductImage({ image ,DescriptionImg}) {
    return (
        <img className="rounded-lg" src={image} alt={DescriptionImg} />
    )
}