import React ,{useState} from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import headbar from "./assets/Screenshot 2022-02-28 at 17.10.02.6220c820967f68.00124550.png";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const [User,setUser] = useState({
  fullname: "",email: "",title: "",country: "",city: "",wallet: "",twittername:"",quote: ""
  
  });


  let name, value
  const handleInputs = (e) =>{

    console.log(e);
    name = e.target.name
    value = e.target.value
    setUser({...User,[name]:value});

  }


  const PostData = async (e) => {
    e.preventDefault();
    const {fullname, email ,title ,country ,city ,wallet ,twittername ,quote } =User;

    const res = await fetch("/app/form" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        fullname, email ,title ,country ,city ,wallet ,twittername ,quote
      })
    });

    const data = await res.json();
    if (data.status === 422 || !data){
      window.alert("Couldn't submit form , Please make sure all fields are filled otherwise logout and login to the form again");
      console.log("Couldn't submit form , Please make sure all fields are filled otherwise logout and login to the form again");
    } else {
      window.alert("Form Submitted Successfully")
      console.log("Form Submitted Successfully")
    }

  }
  



  
  return (  
    <div className="Ap">
      <img src={headbar} width="900px" className="imgcenter" alt="headbar" />
      {isAuthenticated ? (
        ""
      ) : (
        <form>
          <p>
            Dear Artists, Collectors, Writers, Curators, Critics, NFT-
            enthusiasts, et al.
          </p>
          <p>
            You have been selected to contribute a quote in a major forthcoming
            publication on NFTs with the world's leading art publishing house,
            <a href="https://www.taschen.com/">TASCHEN</a> .
          </p>
          <p>
            For authentication, all participants must sign in via their Twitter
            account. This service is secured by{" "}
            <a href="https://auth0.com/?utm_content=branded-homepage&utm_source=google&utm_medium=cpc&utm_term=auth0&utm_campaign=emea-gbr-search-branded&utm_id=go_cmp-12877097011_adg-116693187970_ad-517615323972_kwd-331982174580_dev-c_ext-_prd-_mca-_sig-Cj0KCQjwspKUBhCvARIsAB2IYutkS_FAvB6-eTrt8bRZVqavNu0vYJt2DvxTPmi-O90TZ7pX2O0l1u4aAkaZEALw_wcB&gclid=Cj0KCQjwspKUBhCvARIsAB2IYutkS_FAvB6-eTrt8bRZVqavNu0vYJt2DvxTPmi-O90TZ7pX2O0l1u4aAkaZEALw_wcB">
              Auth0
            </a>{" "}
            .
          </p>
          <p>
            Studio Robert Alice is using this to confirm your Twitter identity
            in case people attempt to impersonate identities when filling in the
            form. Only your Twitter Name is stored, no other data is recorded in
            this process.
          </p>
          <p>
            As with any sign in, we remind you to check that this page is on the
            official robertalice.com domain.
          </p>
          <p>
            For any questions regarding this, please contact:
            <a href="camille@robertalice.com">camille@robertalice.com</a>
          </p>
          <p>
            With thanks,
            <br />
            Robert Alice and TASCHEN
          </p>
          <div className="lg">
            <div className="buttoncontainer">
              <div className="twitterContainer ">
                <div style={{ marginTop: "6px" }} onClick={loginWithRedirect}>
                  Continue to the Form
                </div>
              </div>
            </div>
          </div>
          <div className="auth1">
            <h3>
              {" "}
              {isAuthenticated ? "" : "Please login to Continue to the form "}
            </h3>
            
          </div>
        </form>
      )}
      ;
      {isAuthenticated && (
        <body>
          <form  id="form" method="POST" name="google-sheet">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bolder",
                textAlign: "center",
                paddingBottom: "20px",
              }}
            >
              ON NFTs // Quotes from the Community
            </h1>
            <h4
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              NFTs are ...
            </h4>
            <br />
            <br />

            <br />
            <p>
              Dear Artists, Collectors, Writers, Curators, Critics, NFT
              enthusiasts, et al.
            </p>
            <p>
              You have been selected to contribute a quote in a major
              forthcoming publication on NFTs with the world's leading art
              publishing house, <a href="https://www.taschen.com/">TASCHEN</a> .
            </p>
            <p>
              We would like this book to be as crowdsourced and decentralised as
              possible. These quotes will be featured in the opening and end
              papers of the book as the first things people see. We hope that by
              crowdsourcing opinion and including plural perspectives, these
              quotes will give a well-rounded overview of the multifaceted
              meaning of NFTs, while also showcasing the importance of community
              within the NFT space.
            </p>
            <p>
              In order for us to include your quote, please submit this survey
              by 1 June 2022. The Artists and Studio Robert Alice (Editor) are
              working to firm deadlines, so unfortunately we cannot consider any
              quotes submitted after this date. We thank you in advance for your
              support!
            </p>
            <p>
              Please fill in all of the fields below to help us ensure that this
              publication will meet the highest standard. We look forward to
              hearing your take on NFTs and to publishing your quote to a global
              audience!
            </p>
            <p>
              For any questions please contact:
              <a href="camille@robertalice.com">camille@robertalice.com</a>
            </p>
            <p>
              With thanks,
              <br />
              Robert Alice and TASCHEN{" "}
            </p>
            <br />
            <div className="col-50">
              <div className="Namei">
                <div className="form-controln">
                  <label htmlFor="fullname" id="label-name">
                    Fullname
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="fullname"
                    value={User.name}
                    onChange={handleInputs}
                    placeholder="Full Name or Pseudonym as it will appear in the publication"
                  />
                </div>
              </div>
            </div>

            <div className="mobile">
              <div className="form-controln">
                <label htmlFor="fullname" id="label-name">
                  Fullname
                </label>

                <input
                  type="text"
                  id="name"
                  name="fullname"
                  value={User.name}
                    onChange={handleInputs}
                  
                  placeholder="Full Name or Pseudonym as it will appear in the publication"
                />
              </div>
            </div>

            <div className="col-50">
              <div className="Emaili">
                <div className="form-controln">
                  <label htmlFor="email" id="label-email">
                    Email
                  </label>

                  <input
                    type="email" 
                    id="email"
                    name="email"
                    value={User.email}
                    onChange={handleInputs}
                    placeholder="example@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="mobile">
              <div className="form-controln">
                <label htmlFor="email" id="label-email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={User.email}
                    onChange={handleInputs}
                  placeholder="example@example.com"
                />
              </div>
            </div>

            <div className="Titlei">
              <div className="form-controln">
                <label htmlFor="title" id="label-title">
                  Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  value={User.title}
                    onChange={handleInputs}
                  id="title"
                  placeholder="Your title as to be published in the book, e.g. CEO, X // Founder, X // Early NFT Collector // etc. (max. 10 words)"
                />
              </div>
            </div>

            <div className="col-50">
              <div className="Namei">
                <div className="form-controln">
                  <label htmlFor="Country" id="label-country">
                    Country
                  </label>

                  <input
                    type="text"
                    id="Country"
                    name="country"
                    value={User.country}
                    onChange={handleInputs}
                    placeholder="Country of Origin"
                  />
                </div>
              </div>
            </div>

            <div className="mobile">
              <div className="form-controln">
                <label htmlFor="Country" id="label-country">
                  Country
                </label>

                <input
                  type="text"
                  id="Country"
                  name="country"
                  value={User.country}
                    onChange={handleInputs}
                  placeholder="Country of Origin"
                />
              </div>
            </div>

            <div className="col-50">
              <div className="Emaili">
                <div className="form-controln">
                  <label htmlFor="city" id="label-city">
                    City
                  </label>

                  <input type="text" id="city" name="city"  value={User.city}
                    onChange={handleInputs} placeholder="City of Origin" />
                </div>
              </div>
              <h5 style={{ fontSize: "12px" }}>
                For a global community map of all the contributors for the book
                (results will be anonymised)
              </h5>
            </div>

            <div className="mobile">
              <div className="form-controln">
                <label htmlFor="city" id="label-city">
                  City
                </label>

                <input type="text" id="city" name="city"  value={User.city}
                    onChange={handleInputs} placeholder="City of Origin" />
              </div>
              <h5 style={{ fontSize: "12px" }}>
                For a global community map of all the contributors for the book
                (results will be anonymised)
              </h5>
            </div>

            <div className="Titlei">
              <div className="form-controln">
                <label htmlFor="wallet" id="label-wallet">
                  Wallet Address or ENS Domain
                </label>

                <input
                  type="text"
                  id="wallet"
                  name="wallet"
                  value={User.wallet}
                  onChange={handleInputs}
                  placeholder="Optional but Preferred if already public"
                />
              </div>
            </div>

            <div className="Titlei">
              <div className="form-controln">
                <label htmlFor="twitter" id="label-twitter">
                  Twitter
                </label>

                <input
                  type="text"
                  id="twitterin"
                  name="twittername"
                  value={user.name}
                  onChange={handleInputs}
                  disabled={true}
                  placeholder="Your Twitter Username"
                  
                />
              </div>
            </div>

            <div className="Titlei">
              <div className="form-controlq">
                <label htmlFor="Quote" id="label-qoute">
                  <br />
                  <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Your Quote
                  </h2>
                  <h3 style={{ fontSize: "14px" }}>
                    Please complete the sentence "NFTs are ..." below.
                    We&nbsp;would love to know what NFTs are to you, so your
                    quote can be&nbsp;creative, humorous, technical, weird,
                    critical, personal, philosophical, economical, social,
                    global or local and anything in between.&nbsp;
                  </h3>
                  <h3 style={{ fontSize: "14px" }}>
                    Your quote should only be one sentence and max. 100
                    characters.&nbsp;
                  </h3>
                </label>
              </div>
            </div>

            <div className="Nfti">
              <div className="form-controlq">
                <label htmlFor="NFT" id="description">
                  <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    NFTs are....
                  </h2>
                </label>

                <input
                  required
                  id="NFT"
                  name="quote"
                  value={User.quote}
                  onChange={handleInputs}
                  placeholder="Type Here..."
                  type="text"
                  maxLength={100}
                />

                <h5 style={{ fontSize: "12px" }}>
                  Where appropriate, the statements may be lightly edited and
                  sent back for approval before publication
                </h5>
              </div>
            </div>

            <div className="tandc">
              <p>
                <input
                  type="checkbox"
                  required
                  name="terms"
                  style={{ marginRight: "10px" }}
                />
                I have read and agree to the <u>Terms and Conditions</u>
              </p>
              <span className="tandctext">
                {" "}
                <p>
                  I confirm that I am the sole beneficiary of the copyright of
                  this statement and that their publication does not interfere
                  with the rights of third persons.
                </p>
                <p>
                  This authorisation is valid without limitation for all issues,
                  editions and print-runs of the book [ON NFTs] in all languages
                  for distribution worldwide, including further derivated
                  products (i.e. diaries, calendars, digital publications) of
                  the book. Moreover, I authorise reproduction of the text(s)
                  free of charge in international media and on TV, broadcast and
                  the internet for the promotion of the book and further
                  products of the book, including editorial review.
                </p>
                <p>
                  I understand that the project is confidential until its
                  official release. Before official launch of the book I will
                  not disclose to the public or to any third party any
                  information about i.e. the status and/or publication date of
                  the project.
                </p>
                <p>
                  There is no fee for the use of the text(s) as granted above
                </p>
              </span>
            </div>

            <div className="center">
              <button type="submit" value="submit" className="button" onClick={PostData}>
                <span>Submit</span>
              </button>
              <div className="button" style={{ backgroundColor: "seagreen" }}>
                <div style={{ marginTop: "6px" }} onClick={logout}>
                  Logout
                </div>
              </div>
            </div>
          </form>
        </body>
      )}
    </div>
  );
}

export default App;
