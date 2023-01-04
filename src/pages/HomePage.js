import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import Hero from "../components/Hero";
import Recommendation from "../components/Recommendation";
import NavButtons from "../components/NavButtons";
import Header from "../components/Header";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="../mask-group@2x.png"
        />
        <Hero />
        <div className={styles.letsExploreRwandaWrapper}>
          <b className={styles.letsExploreRwanda}>Let’s explore Rwanda</b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <Recommendation />
        <div className={styles.frameGroup}>
          <div className={styles.activitiesParent}>
            <b className={styles.activities}>Activities</b>
            <b className={styles.viewAll}>View all</b>
          </div>
          <div className={styles.bookingParent}>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group4@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Volcanoes National Park
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar3.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group5@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Akagera National Park
                  </div>
                  <FormControl sx={{ width: 374 }} variant="standard">
                    <InputLabel color="primary">19 miles away</InputLabel>
                    <Select
                      color="primary"
                      defaultValue="4.8"
                      size="medium"
                      label="19 miles away"
                    />
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group6@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Nyungwe National Park
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar3.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.activitiesParent}>
            <b className={styles.activities}>Restaurants</b>
            <b className={styles.viewAll}>View all</b>
          </div>
          <div className={styles.bookingParent}>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group7@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Amahoro Bar</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar5.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group8@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Brochettes</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar5.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="../mask-group9@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Mizuzu</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar5.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.activitiesParent}>
          <b className={styles.activities}>Bars</b>
          <b className={styles.viewAll}>View all</b>
        </div>
        <div className={styles.bookingParent}>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="../mask-group10@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Soko Bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>12 miles away</div>
                    <div className={styles.moneyMouthFace1Parent}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar.svg"
                    />
                    <div className={styles.milesAway}>3.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="../mask-group11@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Iriba Bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>7 miles away</div>
                    <div className={styles.moneyMouthFace1Wrapper}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar.svg"
                    />
                    <div className={styles.milesAway}>4.1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="../mask-group12@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Yard bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>19 miles away</div>
                    <div className={styles.moneyMouthFace1Parent}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar.svg"
                    />
                    <div className={styles.milesAway}>4.9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavButtons />
      <header className={styles.header}>
        <div className={styles.outside}>outside</div>
        <div className={styles.travelDatesParent}>
          <div className={styles.travelDates}>
            <Header />
            <div className={styles.travelDatesChild} />
            <div className={styles.travelDatesInner}>
              <div className={styles.searchParent}>
                <b className={styles.search}>Search</b>
                <img
                  className={styles.iconlycurvedsearch}
                  alt=""
                  src="../iconlycurvedsearch.svg"
                />
              </div>
            </div>
            <div className={styles.vuesaxoutlinelocationParent}>
              <img
                className={styles.vuesaxoutlinelocationIcon}
                alt=""
                src="../vuesaxoutlinelocation.svg"
              />
              <div className={styles.location}>Location</div>
              <div className={styles.addLocation}>Add location</div>
            </div>
            <div className={styles.vuesaxlinearcalendarParent}>
              <img
                className={styles.vuesaxlinearcalendarIcon}
                alt=""
                src="../vuesaxlinearcalendar.svg"
              />
              <div className={styles.date}>Date</div>
              <div className={styles.addDates}>Add dates</div>
            </div>
            <div className={styles.vuesaxlinearprofileParent}>
              <img
                className={styles.vuesaxlinearprofileIcon}
                alt=""
                src="../vuesaxlinearprofile.svg"
              />
              <div className={styles.guests}>Guests</div>
              <div className={styles.addGuests}>Add guests</div>
            </div>
            <img
              className={styles.travelDatesItem}
              alt=""
              src="../vector-1.svg"
            />
            <img className={styles.vectorIcon} alt="" src="../vector-2.svg" />
          </div>
          <img className={styles.frameChild} alt="" src="../group-11.svg" />
        </div>
      </header>
      <div className={styles.footer}>
        <div className={styles.frameParent10}>
          <div className={styles.frameParent11}>
            <div className={styles.outsideParent}>
              <div className={styles.outside}>outside</div>
              <div className={styles.instagramIconParent}>
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../instagram-icon.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../facebook-icon.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../twitter-bird-icon.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../youtube-google-player-social-video-icon.svg"
                />
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.joinOurNewsletterToStayUp}>
                Join our newsletter to stay up to date on features and releases.
              </div>
              <div className={styles.textInputParent}>
                <div className={styles.textInput}>
                  <div className={styles.placeholder}>Enter your email</div>
                </div>
                <div className={styles.lightPillSelected}>
                  <b className={styles.label}>Subscribe</b>
                </div>
              </div>
              <div className={styles.bySubscribingYouAgreeToWi}>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Quick link</div>
              <div className={styles.missionParent}>
                <div className={styles.support}>Booking</div>
                <div className={styles.support}>Support</div>
                <div className={styles.support}>Reviews</div>
              </div>
            </div>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Company</div>
              <div className={styles.missionParent}>
                <div className={styles.support}>Mission</div>
                <div className={styles.support}>Career</div>
                <div className={styles.support}>About us</div>
              </div>
            </div>
            <div className={styles.legalInformationParent}>
              <div className={styles.outside}>Legal information</div>
              <div className={styles.termsOfUseParent}>
                <div className={styles.support}>Terms of use</div>
                <div className={styles.support}>Privacy Policy</div>
                <div className={styles.support}>
                  Hospitality Licence agreement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loginMenu}>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Log in</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>My Trips</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Settings</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Payments</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
