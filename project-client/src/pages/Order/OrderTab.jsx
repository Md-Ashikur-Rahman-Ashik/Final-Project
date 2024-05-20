import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((salad) => (
        <FoodCard key={salad._id} item={salad}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
