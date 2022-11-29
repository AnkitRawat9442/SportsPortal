const College = require("../model/College");
const Student = require("../model/Student");
const player_count = {
    Cricket: 22,
    Football: 22,
    Badminton: 2,
    Chess: 2,
    Volleyball: 14,
    Carrom: 4,
    Snooker: 4,
    Tennis: 4,
    TableTennis: 4,
    Basketball: 10,
};

async function addBooking(req, res, next) {
    const { id, sport, players, collegeName, startTime, endTime, date } = req.body;
    console.log(req.body)
    const count = player_count[sport];
    // console.log(count,players)
    if (players != count)
        return res.status(400).json(`${count} players are required`);
    const newEntry = new College({
        collegeName: collegeName,
        sportsName: sport,
        startTime: startTime,
        endTime: endTime,
        date: date,
        bookedBy: id

    });

     let User = await Student.findOne({ id: newEntry.bookedBy });

   //  console.log(User);
    
    //   newEntry.save().then((result)=>console.log("savedd ..")).catch(err=>console.log(err));
    await College.find({ collegeName: collegeName, sportsName: sport , date : date }).then((result) => {
       console.log(result)
        if (result.length === 0) {

            newEntry.save().then((result) => {
                console.log("savedd ..")
                console.log(`booked by ${User.name}`);
                return res.status(200).json(" new sports Booking Added");
            }
            ).catch(err => console.log(err));
        }
        else {
            for (let i = 0; i < result.length; i++) { 
                if (newEntry.endTime <= result[i].startTime || newEntry.startTime >= result[i].endTime) {
                    if (i == result.length - 1) {
                        newEntry.save().then((result) => {
                            console.log("savedd after ..")
                            console.log(`booked by ${User.name}`);
                            return res.status(200).json("Booking Added");
                        }
                        ).catch(err => console.log(err));
                    }
                    console.log("if  end  " + result[i].collegeName + " " + result[i].sportsName + " " + result[i].startTime + " " + result[i].endTime);
                    continue;
                }
                else {
                    return res.status(400).json("cannot be booked Please select another Slot ..");

                }
            }



        }

    }).catch((err) => console.log(err));



}

module.exports = {
    addBooking,
};
