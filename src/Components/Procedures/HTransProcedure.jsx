import React from 'react';
import boldImgOne from '../../Images/boldImgOne.jpeg';
import boldImgTwo from '../../Images/boldImgTwo.jpeg';
import boldImgThree from '../../Images/boldImgThree.jpeg';

const HTransProcedure = () => {
  return (
    <>
    <div className="container m-3">
      <h2>The Hair Transplant Procedure</h2>
    <div className="card">
      <div className="card-body">

        <p className="font-weight-bold">
        FUE Technique Step by Step
        </p>
        <p  className="font-weight-bold">
        STEPS FOR A SUCCESS HAIR TRANSPLANT
        </p>

        <p className="card-text">
        1. PICTURES
        </p>

        <p className="card-text">
        Medical photographs are taken in pre-defined positions and with a standard background, for documentation and postoperative analysis of the results. Each patient has a collection of photographs with all the steps of his or her treatment. These pictures are taken by the medical team with a special camera.
        </p>

        <p className="card-text">
        The images bellow illustrates the main positions for the photographs taken before and after the FUE hair transplant.
        </p>
        <div className="row">
          <div className="col-lg-4">
          <p>Phase-I</p>
        <img className="img-fluid border border-dark rounded" src={boldImgOne} width={300}  alt="boldImgOne" />
          </div>
          
          <div className="col-lg-4">
          <p>Phase- II</p>
          <img className="img-fluid border border-dark rounded" src={boldImgTwo} width={250}  alt="boldImgTwo" />           
          </div>
 
          <div className="col-lg-4">
          <p>Phase-III</p>

          <img  className="img-fluid border border-dark rounded" src={boldImgThree} width={250}  alt="boldImgThree" />
          </div>

        </div>


        <p className="card-text">
        2. DONOR AND RECIPIENT AREAS MARKINGS
        </p>

        <ul>
          <li>The Physician makes the markings in the donor and recipient areas.</li>
          <li>The recipient area is defined with the hair in normal length.</li>
          <li>The donor area may be partially or totally shaved.</li>
        </ul>


      <p className="card-text">
        3. EXTRACTION OF THE FOLLICULAR UNITS FROM THE DONOR AREA
      </p>

      <p className="card-text">
      The extraction is performed using millimetric surgical instruments named “punches”.
      They have sharp cylindrical edges and vary from 0.8 to 1.1 mm in diameter.
      After being cut with the punch, the follicular units are extracted from the scalp with the aid of extremely fine forceps. The number of follicular units extracted in one day procedure ranges from 2000 to 3500, which amounts to 5000 to 9000 hairs. This number varies from patient to patient, according to the density of the donor zone (number of hairs per follicular unit).At the end of extraction we obtain a number of follicular units that, when multiplied by the number of hairs present in each follicular unit, yields the exact number of hairs transplanted.
      </p>


      <p className="card-text">
      4. PREPARATION OF THE FOLLICULAR UNITS
      </p>

      <p className="card-text">
      Immediately after their extraction, the follicular units are placed in a specific solution that ensures their vitality. A member of the team starts their preparation under the magnification of a stereoscopic microscope. The proper preparation and conservation of the follicular units are essential for the success of the transplant.
      </p>

      <p className="card-text">
      5. STORAGE OF THE FOLLICULAR UNITSS
      </p>

      <p className="card-text">        
          The appropriate preservation of the follicular units is essential for their survival during the period in which they are out of the body.
          The follicular units must remain hydrated and in the ideal temperature during the whole process until the moment of implantation.
      </p>

      <p className="card-text">
      6. LUNCH BREAK
      </p>
      <p className="card-text">
        As the transplantation may last from 5 to 8 hours and being the patient under just a local anesthesia, a break is made between the end of the extraction phase and the beginning of implantation.
        This short break averaging 30 minutes allows the patient to have a light meal.
        The meal is served in the recovery room or in a dedicated area ensuring his or her privacy during the whole surgical procedure.
      </p>



      <p className="card-text">
      7. IMPLANTATION OF THE FOLLICULAR UNITS 
      </p>
      <p className="card-text">        
        In this phase of the procedure, anesthesia is applied to the recipient area and micro orifices are made where the follicular units will be later implanted.
        The incisions are made with needles with a thickness of under 1 mm. The depth of incision is exactly the same as the follicular unit length, thus avoiding the lesion of the blood vessels present in the scalp The incisions define the future angle and growth direction of the hairs, which will be similar to the natural hairs present at the recipient area Precision instruments called implanters are used for the placement of the follicular units in the recipient area There are several available implanters, according to the quantity of hairs in each follicular unit (1 to 4 hairs).   
      </p>


      <p className="card-text">
      8. AFTER THE PROCEDURE
      </p>
      <p className="card-text">
        
About 80% of the transplanted hairs fall between the third and the sixth week after surgery leaving their roots inside the scalp.


From these roots new hairs will grow. The growth starts 3 to 4 months after the procedure.
Because the transplanted hairs do not contain the genetic code for baldness, they do not have the same tendency to fall, yielding long lasting results. 
      </p>

      </div>
    </div>
    </div>
    </>
  )
}

export default HTransProcedure