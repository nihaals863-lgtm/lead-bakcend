import React from 'react'

const Benifits = () => {
  return (
    <div>
        <div className="container my-5">
      {/* Section Heading */}
      <h2 className="mb-4 text-black">  Benefits of Pooja  </h2>

      {/* Cards Row */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card p-3 border-0 shadow-sm">
            <div className="d-flex">
              <img
                src="https://omvaikuntha.com/cdn/shop/files/Enemy_2.png?v=1735972760"
                alt="Relief from Sade Sati" className="me-3 mt-4"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
              <div>
                <h5 >Relief from Sade Sati</h5>
                <p className="mb-0 mt-2">
                  Worshipping Lord Shani at Shani Shingnapur is believed to
                  mitigate the negative effects of Sade Sati, leading to a more
                  peaceful and stable life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card p-3 border-0 shadow-sm">
            <div className="d-flex">
              <img src="https://omvaikuntha.com/cdn/shop/files/Enemy_1.png?v=1735972606"
                alt="Removal of Obstacles" className="me-3 mt-4"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
              <div>
                <h5>Removal of Obstacles and Misfortune</h5>
                <p className=" mb-0 mt-2">
                  Performing Pooja at Shani Shingnapur is believed to remove
                  obstacles that one might face in personal, professional, or
                  financial matters, bringing good fortune and success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="card p-3 border-0 shadow-sm">
            <div className="d-flex">
              <img  src="https://omvaikuntha.com/cdn/shop/files/wish.png?v=1736091754"
                alt="Protection from Financial Loss" className="me-3 mt-4"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
              <div>
                <h5>Protection from Financial Loss</h5>
                <p className="mb-0 mt-2">
                  Lord Shani’s worship is sought by people facing financial loss,
                  bankruptcy, or economic instability. Shani is believed to
                  provide protection against such crises and help restore
                  financial stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Benifits
