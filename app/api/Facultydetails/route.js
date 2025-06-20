import mongoose from "mongoose";
import FacultyDetails from "@/model/facultyDetails/page";



const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Already connected 
    }
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export const POST = async (req) => {
    try {
        await connectDb();
        const body = await req.json();

        const existingFaculty = await FacultyDetails.findOne({ email: body.email });

        if (existingFaculty) {
            // Update the existing record
            existingFaculty.name = body.name;
            existingFaculty.description = body.description;
            existingFaculty.mobile = body.mobile;

            existingFaculty.country = body.country;
            existingFaculty.city = body.city;
            existingFaculty.profession = body.profession;
            existingFaculty.professionCategory = body.professionCategory;
            existingFaculty.gender = body.gender;
            existingFaculty.experience = body.experience;
            existingFaculty.age = body.age;
            existingFaculty.workingMode = body.workingMode;
            existingFaculty.jobType = body.jobType;

            const updatedFaculty = await existingFaculty.save();

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Faculty details updated successfully!",
                    data: updatedFaculty,
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        } else {
            // Create a new record
            const newFaculty = new FacultyDetails({
                email: body.email,
                name: body.name,
                description: body.description,
                mobile: body.mobile,

                country: body.country,
                city: body.city,
                profession: body.profession,
                professionCategory: body.professionCategory,
                gender: body.gender,
                experience: body.experience,
                age: body.age,
                workingMode: body.workingMode,
                jobType: body.jobType,
            });

            const savedFaculty = await newFaculty.save();

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Faculty details stored successfully!",
                    data: savedFaculty,
                }),
                {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
    } catch (error) {
        console.error("Error:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: "Error saving faculty details",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};