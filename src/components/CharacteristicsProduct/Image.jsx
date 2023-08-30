export default function Image({Img, Benefie}) {
    return (
        <img className=" 
            bg-orange-600 rounded-lg py-4 px-3 m-auto
            md:m-auto
            " src={Img} alt={Benefie} />
    )
}