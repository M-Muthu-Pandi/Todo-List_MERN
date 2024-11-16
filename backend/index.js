import express, { json } from "express";
import cors from "cors";
import { connect, model } from "mongoose";
const app = express();
const port = 4080;

app.use(cors());
app.use(json());

connect("mongodb://127.0.0.1:27017/todo").then(() => console.log("DB Success")).catch(() => console.log("DB failed"));

const activities = model("Activities", { activity: String, completed: { type: Boolean, default: false } }, "activities");

app.get("/activitylist", (req, res) => {
    activities.find().then((retdata) => {
        res.send(retdata);
    })
});

app.post("/addactivity", (req, res) => {
    let addactivity = req.body.addactivity;

    const newActivity = new activities({
        activity: addactivity,
        completed: false
    });

    newActivity.save()
        .then((savedActivity) => {
            res.status(200).send(savedActivity);
            console.log("Saved successfully!");
        })
        .catch((err) => {
            console.error("Error saving activity:", err);
            res.status(500).send({ message: "Failed to add activity", error: err });
        });
});

app.post("/deleteactivity", (req, res) => {
    const activityId = req.body.id;

    activities.findByIdAndDelete(activityId)
        .then(() => {
            res.status(200).send({ message: "Activity deleted successfully!" });
            console.log("Deleted successfully!");
        })
        .catch((err) => {
            console.error("Error deleting activity:", err);
            res.status(500).send({ message: "Failed to delete activity", error: err });
        });
});

app.post("/editactivity", (req, res) => {
    const { id, updatedActivity } = req.body;
    console.log("Edited Successfully!");

    activities.findByIdAndUpdate(id, { activity: updatedActivity }, { new: true })
        .then((updatedActivity) => {
            if (updatedActivity) {
                res.status(200).send(updatedActivity);
            } else {
                res.status(404).send({ message: "Activity not found!" });
            }
        })
        .catch((err) => {
            console.error("Error updating activity:", err);
            res.status(500).send({ message: "Failed to update activity", error: err });
        });
});

app.post("/togglecomplete", (req, res) => {
    const { id, completed } = req.body;

    activities.findByIdAndUpdate(id, { completed }, { new: true })
        .then((updatedActivity) => {
            if (updatedActivity) {
                res.status(200).send(updatedActivity);
                console.log("Updated Successfully");
                
            } else {
                res.status(404).send({ message: "Activity not found!" });
            }
        })
        .catch((err) => {
            console.error("Error toggling completion:", err);
            res.status(500).send({ message: "Failed to toggle completion", error: err });
        });
});

app.listen(port, () => {
    console.log(`Port ${port} server started....`);
});