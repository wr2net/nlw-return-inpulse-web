import {ArrowLeft} from "phosphor-react";

interface ArrowBackProps {
    arrowBackRequest: () => void;
}

export function ArrowBack({arrowBackRequest}: ArrowBackProps) {
    return (
        <button
            type="button"
            className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
            onClick={arrowBackRequest}
        >
            <ArrowLeft/>
        </button>
    );
}
