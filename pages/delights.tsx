import { createClient } from "contentful"
import { useState } from "react";
import DelightCard from "../components/delightCard/DelightCard";
import Filter from "../components/filter/Filter";
import WidthLimiter from "../components/WidthLimiter";
import { Delights } from "../types/contentfulTypes";

// grab data from contentful
export async function getStaticProps() {
  // checks if api keys are undefined
  if (process.env.CONTENTFUL_SPACE_ID === undefined || process.env.CONTENTFUL_ACCESS_TOKEN === undefined) {
    console.log("%cWARNING: CONTENTFUL SPACE ID OR ACCESS TOKEN IS UNDEFINED",
    "font-size: 50px; color: red");
    return {
      props: []
    };
  }
  
  // grab client with space id and access token
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  
  // grabs delight content data from contentful 
  const delightRes = await client.getEntries({
    content_type: 'delights',
  })

  // grab the fields
  const newDelights = delightRes.items.map((delight: any) => ({...delight.fields, id: delight.sys.id}))

  // returns the data as props to the element
  return {
    props: {
      delights: newDelights,
    },
    revalidate: 1,
  }
}

export default function shopPage({ delights }: {delights: Delights[]}) {
  // console.log(delights[0]);
  const [typeValue, setTypeValue] = useState<string[]>(["sandwiches", "salads", "soups", "snacks", "drinks"]);

  const [sliderValue, setSliderValue] = useState<number>(20);
  return (
    <section className="bg-[#FFCACA]">
      <WidthLimiter paddingAll={false} customPadding={false}>
        {/* custom padding */}
        <div className="py-[3rem]">
          {/* flex */}
          <div className="flex flex-row min-h-screen">
            {/* filter */}
            <Filter typeValue={typeValue} setTypeValue={setTypeValue} sliderValue={sliderValue} setSliderValue={setSliderValue}/>
            <div className="ml-auto pl-[1rem] w-full sm:w-3/4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                {delights.map((delight) => {
                  if (typeValue.includes(delight.delightType[0].toLowerCase()) && delight.price < sliderValue) 
                  {
                    return (
                      <DelightCard key={delight.id} {...delight} /> 
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </WidthLimiter>
    </section>
  )
}