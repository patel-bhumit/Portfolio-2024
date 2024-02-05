
const Socials = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/roberto-ramos-5b4a0b1b9/",
        icon: "https://img.icons8.com/color/48/000000/linkedin.png"
    },
    {
        id: 2,
        name: "GitHub",
        link: "",
        icon: "https://img.icons8.com/color/48/000000/github--v1.png"
    },
    
];

function Social(){
    return (
        <div>
            <div className="hidden lg:flex md:fixed justify-end flex-col h-screen items-center pl-7">
                <a href="https://www.linkedin.com/in/roberto-ramos-5b4a0b1b9/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="h-10 mb-5" alt="linkedin"/>
                </a>
                <div className="h-1/6 bg-black w-1"></div>
            </div>
            <div className="hidden lg:flex md:fixed justify-end flex-col h-screen items-center pr-7 end-0">
                <p className="rotate-90 w-10 mb-40">bhumit667@gmail.com</p>
                <div className="h-1/6 bg-black w-1"></div>
            </div>
        </div>
    )
}

export default Social;