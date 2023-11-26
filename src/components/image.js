

const Image = ({data}) => {
    return (
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img  className="h-72 w-full objet-cover rounded-lg shadow-md mr-10"src={data.urls.small } alt={data.alt_description}/>
        </a>
    );
}

export default Image;
