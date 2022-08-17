import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = () => {
    return (
        <div className="w-screen h-screen grid place-items-center">
            <FontAwesomeIcon className="animate-spin" size={'3x'} color="black" icon={['fas', 'spinner']}/>
        </div>
    )
}