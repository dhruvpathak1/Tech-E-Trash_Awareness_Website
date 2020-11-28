import React from "react"
import Layout from "../components/layout"
import { Container, Row , Col, Button, CardTitle, CardBody,Card } from "reactstrap";
import wasteStyles from "../styles/waste.module.scss";
import img1 from "../images/e1.webp";
import img2 from "../images/e2.jpg";
import { Helmet } from "react-helmet"

const SecondPage = () => {

function cat1() {

  var option=document.getElementById("devices").value;

  var title=document.getElementById("title")
  var selected=document.createTextNode(option)
  title.innerHTML=" "
  title.appendChild(selected)
  var body=document.getElementById("body")
  body.innerHTML=" "
  var caty=document.getElementById("c1")
  caty.innerHTML=" "
  var ewaste=""

  if(option==("Refrigerators")){
    
    var facts=document.createTextNode("41.8m tonnes of so-called e-waste – mostly fridges and other domestic appliances at the end of their life – was dumped, the UN report said. That’s the equivalent of 1.15m heavy trucks, forming a line 23,000km (14,300 miles) long, according to the report, compiled by the United Nations University, the UN’s educational and research branch.")
    body.appendChild(facts)
    ewaste="Category: Major appliances"

  }

  else if(option==("Washing Machines")){

    var facts=document.createTextNode("41.8m tonnes of so-called e-waste – mostly  washing machines and other domestic appliances at the end of their life – was dumped, the UN report said. That’s the equivalent of 1.15m heavy trucks, forming a line 23,000km (14,300 miles) long, according to the report, compiled by the United Nations University, the UN’s educational and research branch.")
    body.appendChild(facts)
    ewaste="Category: Major appliances"
  }

  
  else if(option==("Printers")){

    var facts=document.createTextNode("Printer cartridge or toner comprises of almost 12% of total e-waste produced in the whole world, bnigger than any other component by a tremondous margin!")
    body.appendChild(facts)
    ewaste="Category: Major appliances"
  }
  
  else if(option==("Vacuum Cleaner")){

    var facts=document.createTextNode("The end-of-life stage for the main body of the vacuum cleaner: For metal waste, 95% recycling rate is observed, In the case of plastics (PVC, PP, ABS, POM and HPDE), plastic disposal data have been observed: 26% recycling, 36% incineration with energy recovery and 38% landfilling, For the cardboard packaging, the latest available packaging disposal data have been observed as follows: 84% recycling, 7% incineration with energy recovery and 9% landfilling.")
    body.appendChild(facts)
    ewaste="Category: Small appliances"
  }

  
  else if(option==("PC's")){

    var facts=document.createTextNode("Computer equipments account for almost 70 per cent of e-waste. Users discard old computer much faster than before. According to a study in May 2017, the volume of waste is growing at an estimated 21 per cent annually. This report predicts that by 2020, e-waste from old computers in India will increase by 500 per cent.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }

  
  else if(option==("Laptops")){

    var facts=document.createTextNode("Recycling 1 million laptops saves the energy equivalent to the electricity used by 3,657 U.S. homes in a year. Cell phones and other electronic items contain high amounts of precious metals like gold or silver. Americans dump phones containing over $60 million in gold/silver every year.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }

  
  else if(option==("Mobile Phones")){

    var facts=document.createTextNode(" For every one million cell phones that are recycled, the EPA states that 35,274 pounds of copper, 772 pounds of silver, 75 pounds of gold and 33 pounds of palladium can be recovered. Mobile phones have become a major chunk of the over 2 million metric tonnes of electronic waste (or e-waste) India generates annually.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }

  
  else if(option==("Telephones")){

    var facts=document.createTextNode("Telephones have valuable material inside such as plastics, gold, silver and platinum. The most valuable material is gold, which is used in the phone circuit boards. Chargers contain copper, which is less valuable but is still reusable. By today’s method of strip mining, collecting one clean ounce of gold generates 79 tons of toxic waste, the equivalent of 39 cars stacked on top of each other. Recycling telephones reduces greenhouse gas emissions and conserves natural resources such as gold.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }

  
  else if(option==("Musical Instruments")){

    var facts=document.createTextNode("Today’s digital instruments range from keyboards and electronic drums and guitars, to computing devices that create beats and sounds. As these instruments become more common, more musicians are looking for answers on how to dispose outdated or broken instruments or their separate parts. Sound generators are comprised of software programs that produce rhythms, chords and sounds with Musical Instrument Digital Interface, or MIDI, electronic commands. Like UI software, they are usually made up of computer chips or circuits, which can potentially be reused or taken to a scrap recycler. Amplifiers are made of wires, batteries and a circuit board — items that can potentially be recycled at your local recycling center.")
    body.appendChild(facts)
    ewaste="Category: Consumer electronics"
  }

  
  else if(option==("Wires")){

    var facts=document.createTextNode("From scrap cable and wires 3.7 million metric tons of aluminum, 0.86 million metric tons of copper were recovered.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }

    else if(option==("Medical Equipment")){

    var facts=document.createTextNode("The medical equipments are all combination of electronics components and different chemicals. The recycling of these components will reduce the environmental pollution. It is difficult to dispose the medical equipments waste. This problem can be reduced by Medical Equipments recycling. Also, the recycling of medical equipment will add value to the otherwise waste components.")
    body.appendChild(facts)
    ewaste="Category: Medical Devices"
  }

      else if(option==("Electronic toys/Models/Sports Equipment")){

    var facts=document.createTextNode("All-metal toys, or the metal components of toys, are the easiest to recycle, most scrap yards accept and recycle a wide variety of metal from these items. A number of sports items come from recycled materials. Aluminum baseball bats are yet another thing we can make from recycled cans. Some bicycles are made with recycled aluminum. Companies also make athletic shoes, surfboards, and kayaks from recycled materials, while others make soccer balls from sustainably harvested rubber.")
    body.appendChild(facts)
    ewaste="Category:  Toys and leisure"
  }

      else if(option==("Circuits Boards")){

    var facts=document.createTextNode("Recycling circuit boards can be more valuable than mining for ore! One ton of circuit boards is estimated to contain 40 to 800 times more gold than one metric ton of ore. There is 30 to 40 times more copper in a ton of circuit boards that can be mined from one metric ton of ore.")
    body.appendChild(facts)
    ewaste="Category: Computer and Telecommunication"
  }
  
    else if(option==("Audio/Video Devices")){

    var facts=document.createTextNode("All types of audio and video cassette tapes can be recycled. This allows the recovery of valuable resources such as polycarbonate (a type of plastic) for reuse in the manufacture of new plastics products. It also diverts e-waste from landfill where it will persist indefinitely. The recycling process involves separating the various plastic components of these media, which is then granulated and recycled. The plastic cases are recycled with other plastics and the paper are given to paper recyclers for processing. The recovered plastics are used for manufacturing a wide variety of products.")
    body.appendChild(facts)
    ewaste="Category: Consumer electronics"
  }

  
  else if(option==("Drills/Saws")){

    var facts=document.createTextNode("Electrical and electronic equipment like drills and saws are made up of a wide variety of materials, many of which can be reused (for example, there’s enough steel in an iron to produce 13 steel cans). By recycling your old and unwanted electrical items, you’re doing your bit to help the environment by preventing potentially hazardous waste from entering landfill and causing soil and water contamination.")
    body.appendChild(facts)
    ewaste="Category: Electrical and Electronic tools"
  }

    else if(option==("Detectors/Thermostats/Lab Equipment")){

    var facts=document.createTextNode("Recyclable precious metals that were hidden in their testing equipment – in components like thermocouple wire, electrodes, tubing, computer consoles,detectors, thermostats and even smaller items like platinum alloy bearing laboratory tongs and mesh screens.")
    body.appendChild(facts)
    ewaste="Category: Monitoring Devices"
  }

  
    else if(option==("Light bulbs/Fluorescent tubes")){

    var facts=document.createTextNode("Recycling CFLs and other fluorescent bulbs allows reuse of the glass, metals and other materials that make up fluorescent lights. Virtually all components of a fluorescent bulb can be recycled.")
    body.appendChild(facts)
    ewaste="Category:  Lighting Devices"
  }

  var type=document.createTextNode(ewaste)
  caty.appendChild(type)

}

 return <Layout>
        <Helmet title="Tech-E | Know Your Waste" defer={false} />
      <div md={12} className={wasteStyles.ques}>     
      </div>
      
    <Container fluid>
      <Row>
        <Col xs={12} md={12}>
        <br /><div className={wasteStyles.title}>

          <h1 className={wasteStyles.title}>What E-Waste do you currently have? </h1>
            <select className={wasteStyles.options1} name="devices" id="devices">
            <option value="none" disabled hidden selected>Choose your device</option>
            <option value="Refrigerators">Refrigerators</option>
            <option value="PC's">PC's</option>
            <option value="Circuits Boards">Circuits Boards</option>
            <option value="Washing Machines">Washing Machines</option>
            <option value="Vacuum Cleaner">Vacuum Cleaner</option>
            <option value="Wires">Wires</option>
            <option value="Laptops">Laptops</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Musical Instruments"> Musical Instruments</option>
            <option value="Printers">Printers</option>
            <option value="Detectors/Thermostats/Lab Equipment">Detectors/Thermostats/Lab Equipment</option>
            <option value="Telephones">Telephones</option>
            <option value="Audio/Video Devices">Audio/Video Devices</option>
            <option value="Medical Equipment">Medical Equipment</option>
            <option value="Electronic toys/Models/Sports Equipment">Electronic toys/Models/Sports Equipment</option>
            <option value="Light bulbs/Fluorescent tubes">Light bulbs/Fluorescent tubes</option>        
          </select><br />
                    <Button className={wasteStyles.button} onClick={cat1}>Search</Button> 
        </div>
          
        </Col>
      </Row>
      </Container>  


        <Container fluid>
          <Row>
            <Col xs={12} md={12} id="info" className={wasteStyles.info}>
              <h2 id="c1">E-Waste Category</h2>
              <Card className={wasteStyles.catcard}>
                <CardTitle id="title" className={wasteStyles.cathead}>Your E-Waste</CardTitle>
                <CardBody id="body" className={wasteStyles.catbody}>Facts about your selected e-waste.</CardBody>
              </Card>
            </Col>
          </Row>

        <Row className={wasteStyles.col1}>

          <Col xs={12} md={6} className={wasteStyles.colofimg}>
          <img src={img1} className={wasteStyles.colimg} data-sal="flip-right" data-sal-delay="7000" data-sal-easing="ease" alt="Acca,Ghana Landfill" />
          </Col>

          <Col xs={12} md={6}>
            <h2 className={wasteStyles.coltext}>Heavy, acidic gusts of smoke billow across the Agbogbloshie dump, a wasteland dotted with burning mounds of trash in Ghana’s capital, Accra. Around 50 million tons of electronic waste, or e-waste, is being thrown away each year with is estimated to dobule by 2050. Only 20% of the largest E-Waste landfill in the world in recycled.</h2>
          </Col>

        </Row>

        <Row>
          <Col className={wasteStyles.wallpaper}>
            <h1 className={wasteStyles.quote}>“The greatest threat to our planet is the belief that someone else will save it.”</h1>
             <h1 className={wasteStyles.quote1}>- Robert Swan, Author</h1>
          </Col>
        </Row>

        
        <Row className={wasteStyles.col1}>
          <Col xs={12} md={6}>
          <br />
            <h2 className={wasteStyles.coltext}>International E-Waste Day is celebrated on the 14th of October held by Waste Electrical and Electronic Equipment Directive also known as WEEE.</h2>
          </Col>
          <Col xs={12} md={6} className={wasteStyles.colofimg}>
          <img src={img2} className={wasteStyles.colimg} data-sal="flip-left" data-sal-delay="7000" data-sal-easing="ease" alt="E-Waste Logo" />
          </Col>
        </Row>

        </Container>
    <br />
  </Layout>
}

export default SecondPage
