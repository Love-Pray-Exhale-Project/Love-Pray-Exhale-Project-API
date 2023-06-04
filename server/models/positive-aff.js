const dynamodb = require("dynamodb");
const { Schema } = dynamodb;

const TermsSchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

// Table name: PositiveAffirmations
// Partition key: Category (String)
// Sort key: Affirmation (String)

// Example item:
// {
// "Category": "Self-belief and confidence",
// "Affirmation": "I am capable of achieving anything I set my mind to."
// }

mongoose.model("name of model", TermsSchema);