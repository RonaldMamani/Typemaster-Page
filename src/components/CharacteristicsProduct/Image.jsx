export default function Image({Img, Benefie}) {
    return (
        <img className=" 
            bg-orange-600 rounded-lg p-[0.9rem] w-12 h-12 mb-4
            " src={Img} alt={Benefie} />
    )
}