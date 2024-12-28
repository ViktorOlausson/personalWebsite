import React from 'react'

const containerStyle = "flex flex-col items-center justify-center w-[30%] mx-4"
const partDivStyle = "flex flex-col items-center justify-center text-center p-[10px]"

const h3Text = "text-light text-lg font-semibold"
const h2Email = "text-text-primary font-normal text-lg"

function Contact() {
  return (
    <div className='flex flex-row align-middle justify-center'>
      <div className={`${containerStyle}`}> {/* heading container */}
        <div className={`${partDivStyle} my-5 w-[80%]`}>
          <h3 className={`${h3Text}`}>To get in touch regarding development, whether it be collaboration or 
          work opportunity, please use the email bellow</h3>
          <a href="mailto:dev.viktorolausson@gmail.com"><h2 className={`${h2Email}`}>dev.viktorolausson@gmail.com</h2></a>
        </div>

        <div className={`${partDivStyle} my-5 w-[80%]`}> 
          <h3 className={`${h3Text}`}>To get in touch regarding training or taekwondo, 
          whether it be advice or regarding personal training, please use the email bellow </h3>
          <a href="mailto:viktor@wermdotkd.se"><h2 className={`${h2Email}`}>viktor@wermdotkd.se</h2></a>
        </div>
      </div>

      {/* <div className={`${containerStyle} bg-green-600`}>
      <div className={`${partDivStyle} bg-purple-700`}> 
          <form>

        <div>
            <label className='textLight' htmlFor="Name">Name</label>
            <input type="text" name="name" id="name"/>
        </div>

        <div>
            <label className='textLight' htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
        </div>

        <div>
            
            <label className='textLight' htmlFor="choice">Regarding?</label>  
            <div className='choiceContainer'>

                fix so it only can be one at a time 
                <div className='choice'>
                    <input className='radio' type="radio" name="TKD" id="TKD" />
                    <label className='textLight' htmlFor="TKD">Taekwondo</label>
                </div>
                
                <div className=''>
                    <input className='radio' type="radio" name="DEV" id="DEV" />
                    <label className='textLight' htmlFor="TKD">Development</label>
                </div>
                
            </div>
            
        </div>

        <div>
            <label className='' htmlFor="message">Your Message</label>
            <textarea name="message" id="message"></textarea>
        </div>
        <div>
            <button className='' type='submit'>
                Send
            </button>
        </div>

        </form>
        </div>
      </div> */}

    </div>
  )
}

export default Contact