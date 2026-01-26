import Image from "next/image";

const ImageModal = ({ clickedImg, setClickedImg, handelRotationRight, handelRotationLeft, }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
        <>
            <div className="overlay dismiss" onClick={handleClick}>
                <Image src={clickedImg} alt="Light Box View" height={500} width={500} className="rounded-lg" />
                <span className="dismiss" onClick={handleClick}>
                    <div className="" onClick={handleClick}>
                        <span
                            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -rotate-45 translate-y-1`}
                        ></span>
                        <span
                            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 opacity-0`}
                        ></span>
                        <span
                            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm rotate-45 -translate-y-1`}
                        ></span>
                    </div>
                </span>
                <div onClick={handelRotationLeft} className="overlay-arrows_left">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div onClick={handelRotationRight} className="overlay-arrows_right">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageModal;
