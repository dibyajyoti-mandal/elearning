import TryCatch from "../utils/tryCatch";
import { Courses } from "../models/course.model";
import { Lecture } from "../models/lecture.model";
import { User } from "../models/user.model";

export const getAllCourses = TryCatch(async (req, res) => {
    const courses = await Courses.find();
    res.json({
        courses
    })
})

export const getCourse = TryCatch(async (req, res) => {
    const course = await Courses.findById(req.params.id);
    res.json({
        course,
    });
});


