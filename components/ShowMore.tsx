"use client";

import { useRouter } from "@/node_modules/next/navigation";
import { ShowMoreProps } from "@/types/index";
import { updateSearchParams } from "@/utils/index";
import CustomButton from "./CustomButton";

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {

    const router = useRouter();

    const hundleNavigate = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName)
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton   title="Show More" 
                            containerStyles="bg-primary-blue rounded-full text-white"
                            hundleClick={hundleNavigate} 
                            />

        )}
    </div>
  )
}

export default ShowMore