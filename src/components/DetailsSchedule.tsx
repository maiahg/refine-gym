import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar } from "lucide-react";

interface DetailsScheduleProps {
  sessionType?: string;
}

const DetailsSchedule = ({ sessionType }: DetailsScheduleProps) => {
  const scheduleData = {
    training: [
      {
        day: "Monday",
        times: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ],
      },
      {
        day: "Tuesday",
        times: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ],
      },
      {
        day: "Wednesday",
        times: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ],
      },
      {
        day: "Thursday",
        times: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ],
      },
      {
        day: "Friday",
        times: [
          "6:00 AM",
          "7:00 AM",
          "8:00 AM",
          "6:00 PM",
          "7:00 PM",
          "8:00 PM",
        ],
      },
      {
        day: "Saturday",
        times: [
          "8:00 AM",
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "2:00 PM",
          "3:00 PM",
        ],
      },
      {
        day: "Sunday",
        times: [
          "8:00 AM",
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "2:00 PM",
          "3:00 PM",
        ],
      },
    ],
    classes: [
      {
        day: "Monday",
        times: ["6:30 AM - HIIT", "12:00 PM - Strength", "6:00 PM - Bootcamp"],
      },
      {
        day: "Tuesday",
        times: ["6:30 AM - Yoga", "12:00 PM - Circuit", "6:00 PM - Zumba"],
      },
      {
        day: "Wednesday",
        times: ["6:30 AM - HIIT", "12:00 PM - Pilates", "6:00 PM - Strength"],
      },
      {
        day: "Thursday",
        times: ["6:30 AM - Bootcamp", "12:00 PM - Yoga", "6:00 PM - Circuit"],
      },
      {
        day: "Friday",
        times: [
          "6:30 AM - HIIT",
          "12:00 PM - Strength",
          "6:00 PM - Dance Fitness",
        ],
      },
      {
        day: "Saturday",
        times: ["9:00 AM - Bootcamp", "10:30 AM - Yoga", "2:00 PM - HIIT"],
      },
      {
        day: "Sunday",
        times: [
          "9:00 AM - Pilates",
          "10:30 AM - Strength",
          "2:00 PM - Restorative Yoga",
        ],
      },
    ],
  };

  const sessions =
    sessionType === "training" ? scheduleData.training : scheduleData.classes;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            <p className="text-2xl font-semibold">
              {sessionType === "training"
                ? "Personal Training Schedule"
                : "Group Class Schedule"}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black mb-6 text-lg">
            {sessionType === "training"
              ? "Available time slots for personal training sessions."
              : "Weekly schedule for our group classes. Join us for a fun and energizing workout!"}
          </p>

          <div className="grid gap-4">
            {sessions.map((session, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">
                        {session.day}
                      </h3>
                      <div className="space-y-1">
                        {Array.isArray(session.times) ? (
                          session.times.map((time, timeIndex) => (
                            <div
                              key={timeIndex}
                              className="flex items-center gap-2"
                            >
                              <Clock className="w-4 h-4 text-black" />
                              <span className="text-md">{time}</span>
                            </div>
                          ))
                        ) : (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 black" />
                            <span className="text-sm">{session.times}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <Badge variant="outline" className="mb-1">
                          <Users className="w-3 h-3 mr-1" />5 spots available
                        </Badge>
                        <p className="text-lg text-black">
                          Contact us to reserve
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsSchedule;
