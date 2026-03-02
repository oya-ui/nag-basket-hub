import { Calendar, Users, Trophy } from "lucide-react";

const activities = [
  {
    icon: Calendar,
    title: "週2回の練習",
    description: "毎週水曜・土曜に体育館で練習しています。初心者から経験者まで、みんなで楽しく上達！",
  },
  {
    icon: Trophy,
    title: "大会・試合",
    description: "インカレ大会や他大学との交流試合に積極的に参加。目標を持って本気で取り組みます。",
  },
  {
    icon: Users,
    title: "イベント・交流",
    description: "BBQ、合宿、飲み会など、バスケ以外のイベントも盛りだくさん。最高の仲間に出会えます。",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center text-foreground mb-4">
          ACTIVITIES
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-sans">
          NAGの活動内容
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-card-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
