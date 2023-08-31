export default function ProductImg1({imgProduct, imgDescription}) {
    return (
        <div className="bg-orange-700 h-full">
            <img src={imgProduct} alt={imgDescription} className="rounded-lg opacity-20 h-full" />
        </div>
    )
}