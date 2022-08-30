const PopulationMiddle = require("../../models/populations/PopulationMiddleYear");
const getPopulations = async (req, res) => {
  try {
    const populations = await PopulationMiddle.aggregate([
      {
        $group: {
          _id: {
            Govern: "$Govern",
            Sex: "$Sex",
            Urban: "$Urban",
          },
          total_2017: {
            $sum: "$2017",
          },
          total_2018: {
            $sum: {
              $toInt: "$2018",
            },
          },
          total_2019: {
            $sum: "$2019",
          },
        },
      },
    ]);

    res.json(populations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getPopulations,
};
