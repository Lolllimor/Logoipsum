import Shapes from "./Shapes"


const Ready = () => {
  return (
    <section class="ready">
      <Shapes colorClass= 'purple p-ready'/>
      <Shapes colorClass= 'orange o-ready'/>
      <span class="money-back"> GET 30 DAYS MONEY BACK GUARANTEE</span>
      <h2>Ready to learn UX Design from the expert?</h2>
      <button class="btn begin">Get Started</button>
    </section>
  )
}

export default Ready