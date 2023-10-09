import OrderStatusCard from "../../Cards/OrderStatusCard/OrdersStatusCard";
const CurrentOrders = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-6 pt-6 pb-24">
      {/* Posterior se hará map con los productos dependiendo su estado enviado por props*/}
      <OrderStatusCard status="Shipped" />
      <OrderStatusCard status="Confirmed" />
      <OrderStatusCard status="Preparing" />
      <OrderStatusCard status="Confirmed" />
      <OrderStatusCard status="Shipped" />
    </div>
  );
};
export default CurrentOrders;
