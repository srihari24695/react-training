import { useEffect } from "react";

export function useTitle(title: string){

    // This is the custom hook to set the page title.
    useEffect(() => {
        const originalTitle = document.title; // to store the original title of the page before changing it
        document.title = document.title + " - " + title; // to set the title of the page when the page is loaded

        return () => {
            document.title = originalTitle; // to reset the title of the page to the original title when the component is unmounted
        }
    },[]);

}