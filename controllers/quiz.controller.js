

export const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
    
        if(!quizzes) return res.status(204).json({message: "No quizz found"});
    
        return res.status.json(quizzes);
    } catch (error) {
        console.log("error in getQuizzes", error.message);
        return res.status(500).json({error: "internal server error"});
    }
}