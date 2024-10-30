import React from "react";
 
import { useNavigate } from "react-router-dom";

export default Services;
function Services(){

const navigate = useNavigate();

    return(
     <>
        <section>
    <div class="container">
            <div className="row ">
                <div className="col-12 col-m-4 col-lg-4">
                    <h1 class="text-success"> Services page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore, eius ut voluptatem dolorum quos perspiciatis. Similique adipisci at ipsam.</p>

                </div>
            </div>
            <button class="btn btn-info"
             onClick={() => {
                 navigate("/");
            }}
            >
                Go to Home page section 
                
                </button>
    </div>
    </section>
    </>
    );
};