import GuardImg from './Images/Guards.jpg'

const TrainingData = [
    {
        "id": 1,
        "heading": "Professional Training",
        "paragraph": "Embark on a transformative journey with our comprehensive training programs designed to shape proficient security professionals. Our Professional Training goes beyond industry standards, instilling expertise that transcends conventional boundaries. Embark on a transformative journey with our comprehensive training programs designed to shape proficient security professionals. Our Professional Training goes beyond industry standards, instilling expertise that transcends conventional boundaries.",
        "imgUri": GuardImg,
    },
    {
        "id": 2,
        "heading": "Personality Development",
        "paragraph": "Elevate your capabilities with our Personality Development module, honing interpersonal skills crucial for effective security operations. Elevate your capabilities with our Personality Development module, honing interpersonal skills crucial for effective security operations.",
        "imgUri": GuardImg,
    },
    {
        "id": 3,
        "heading": "Fire Fighting",
        "paragraph": "In the realm of safety, our Fire Prevention and Fire Fighting course equips individuals with the knowledge to handle emergencies, ensuring a swift and efficient response to potential threats.In the realm of safety, our Fire Prevention and Fire Fighting course equips individuals with the knowledge to handle emergencies, ensuring a swift and efficient response to potential threats.",
        "imgUri": GuardImg,
    },
    {
        "id": 4,
        "heading": "Evacuation Procedure",
        "paragraph": "Master the art of immediate care with our First Aid and Evacuation Procedure training, fostering a culture of safety-conscious personnel. Master the art of immediate care with our First Aid and Evacuation Procedure training, fostering a culture of safety-conscious personnel.",
        "imgUri": GuardImg,
    },
    {
        "id": 5,
        "heading": "Emergency Response",
        "paragraph": "Our Emergency Response program prepares individuals to handle crises with resilience and strategic acumen, ensuring a calm and effective reaction in high-pressure situations. Our Emergency Response program prepares individuals to handle crises with resilience and strategic acumen, ensuring a calm and effective reaction in high-pressure situations.",
        "imgUri": GuardImg,
    },
    {
        "id": 6,
        "heading": "On Job Training",
        "paragraph": "Experience real-world scenarios through our On Job Training, providing practical insights and hands-on experience for seamless on-the-ground execution. Experience real-world scenarios through our On Job Training, providing practical insights and hands-on experience for seamless on-the-ground execution.",
        "imgUri": GuardImg,
    },
    {
        "id": 7,
        "heading": "Refresher Course",
        "paragraph": "Stay updated with the latest industry protocols through our Refresher Course, reinforcing and enhancing skills to meet the dynamic challenges of the security landscape. Stay updated with the latest industry protocols through our Refresher Course, reinforcing and enhancing skills to meet the dynamic challenges of the security landscape. ",
        "imgUri": GuardImg,
    }
];

TrainingData.forEach((item, index) => {
    item.key = index % 2 === 0 ? "even" : "odd";
});

export default TrainingData;