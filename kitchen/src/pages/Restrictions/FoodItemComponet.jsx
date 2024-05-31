import link from '../../assets/burger.png'
import { Button } from "@/components/ui/button";




// eslint-disable-next-line react/prop-types
export const FoodItemComponent = ({item_name,item_price,item_available,item_category,item_photo}) => {

    return(
      <div className="w-full flex justify-around  mt-4 mb-4 border-b-2 p-2">
          <img src={link} alt="img" className="w-[120px] h-[109px]"/>
          <div className='flex flex-col'>
              <h4>{item_name}</h4>
              <p>{item_category}</p>
              <h3 className='font-extrabold'>Rs. {item_price}</h3>
          </div>

          <Button className={item_available ? "bg-[#20402A]" : "bg-red-500"}>{item_available ? "Restrict Item" : "Available Now"}</Button>
           
      </div>
    )
}