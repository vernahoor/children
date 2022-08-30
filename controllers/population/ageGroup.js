const AgeGroup = require("../../models/populations/AgeGroup18");
const getPopulations = async (req, res) => {
  try {
    const populations = await AgeGroup.aggregate([
      {
        $group: {
          _id: {
            Sex: "$ذكور",
            Urban: "$حضر",
          },
          total: {
            $sum: "$79405",
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
