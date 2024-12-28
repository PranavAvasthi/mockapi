const express = require('express');
const app = express();
const PORT = 3000;

const mockResponse = {
    sections: [
        {
            id: "section1",
            title: "Fitness and Diet",
            required: false,
            questions: [
                {
                    id: "question1",
                    text: "Do you have any dietary preferences?",
                    type: "multi",
                    options: [
                        { id: "option2", text: "Vegetarian" },
                        { id: "option1", text: "Vegan" },
                        { id: "option3", text: "Halal" },
                        { id: "option4", text: "Gluten-free" },
                    ]
                },
                {
                    id: "question2",
                    text: "How active are you?",
                    type: "single",
                    options: [
                        { id: "option1", text: "2-3 days per week" },
                        { id: "option2", text: "4+ days per week" },
                        { id: "option3", text: "Rarely" },
                    ]
                },
                {
                    id: "question3",
                    text: "What are you looking to improve?",
                    type: "multi",
                    options: [
                        { id: "option1", text: "Immune system" },
                        { id: "option2", text: "Digestive function" },
                        { id: "option3", text: "Gut health" },
                        { id: "option4", text: "Skin, hair and nails" },
                        { id: "option5", text: "Energy levels" },
                        { id: "option6", text: "Stress management" },
                        { id: "option7", text: "Heart health" },
                        { id: "option8", text: "Bones and joints" },
                        { id: "option9", text: "Memory function" },
                        { id: "option10", text: "Sleep support" },
                        { id: "option11", text: "Overall wellbeing" },
                        { id: "option12", text: "Weight management" },
                        { id: "option13", text: "Other" },
                    ]
                }
            ]
        },
        {
            id: "section2",
            title: "Energy Levels",
            required: true,
            questions: [
                {
                    id: "question1",
                    text: "Which of the below relates best to your energy levels?",
                    type: "multi",
                    options: [
                        { id: "option1", text: "Often tired" },
                        { id: "option2", text: "Difficulty waking up" },
                        { id: "option3", text: "Trouble sleeping" },
                        { id: "option4", text: "Burnout or fatigue" },
                        { id: "option5", text: "Lack of focus" },
                        { id: "option6", text: "Difficulty regulating mood" },
                        { id: "option7", text: "My energy levels are generally good" }
                    ]
                },
                {
                    id: "question2",
                    text: "How many hours of sleep do you get on average?",
                    type: "single",
                    options: [
                        { id: "option1", text: "Less than 4 hours" },
                        { id: "option2", text: "4-6 hours per night" },
                        { id: "option3", text: "6-8 hours per night" },
                        { id: "option4", text: "8+ hours per night" }
                    ]
                },
            ]
        },
        {
            id: "section3",
            title: "Supplements Intake",
            required: false,
            questions: [
                {
                    id: "question1",
                    text: "Do you plan on taking any supplements?",
                    type: "multi",
                    options: [
                        { id: "option1", text: "Iron" },
                        { id: "option2", text: "Vitamin D" },
                        { id: "option3", text: "Vitamin A" },
                        { id: "option4", text: "Vitamin B12 " },
                        { id: "option5", text: "Other" },
                    ]
                },
                {
                    id: "question2",
                    text: "Do you have any known deficiencies?",
                    type: "multi",
                    options: [
                        { id: "option1", text: "Iron" },
                        { id: "option2", text: "Vitamin D" },
                        { id: "option3", text: "Vitamin A" },
                        { id: "option4", text: "Vitamin B12 " },
                        { id: "option5", text: "Other" },
                    ]
                },
                {
                    id: "question3",
                    text: "What supplements are you currently taking?",
                    type: "multi",
                    options: [
                        { id: "option1", text: "Iron" },
                        { id: "option2", text: "Vitamin D" },
                        { id: "option3", text: "Vitamin A" },
                        { id: "option4", text: "Vitamin B12 " },
                        { id: "option5", text: "Other" },
                    ]
                }
            ]
        }
    ]
};

app.get('/', (req, res) => {
    res.send('Server Health Check');
});

app.get('/api/questions', (req, res) => {
    res.json(mockResponse);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
