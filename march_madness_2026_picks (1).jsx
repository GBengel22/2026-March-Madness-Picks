import { useState } from "react";

const roundData = {
  east: {
    name: "EAST",
    city: "Washington, D.C.",
    venue: "Capital One Arena",
    accent: "#3b82f6",
    r64: [
      { seed1: 1, team1: "Duke", seed2: 16, team2: "Siena", pick: "Duke", pickSeed: 1, confidence: "LOCK", note: "32-2, #1 overall seed. Cameron Boozer is a top-3 NBA pick." },
      { seed1: 8, team1: "Ohio State", seed2: 9, team2: "TCU", pick: "Ohio State", pickSeed: 8, confidence: "LEAN", note: "OSU peaked at the right time with key wins over Wisconsin, Purdue, Iowa." },
      { seed1: 5, team1: "St. John's", seed2: 12, team2: "Northern Iowa", pick: "St. John's", pickSeed: 5, confidence: "LEAN", note: "Pitino just won the Big East tourney. UNI's defense is elite but St. John's has too much size with Ejiofor and Hopkins." },
      { seed1: 4, team1: "Kansas", seed2: 13, team2: "Cal Baptist", pick: "Kansas", pickSeed: 4, confidence: "LOCK", note: "Darryn Peterson is the potential #1 NBA pick. CBU's Daniels Jr. (23.2 ppg) will make it interesting but KU is too deep." },
      { seed1: 6, team1: "Louisville", seed2: 11, team2: "South Florida", pick: "South Florida", pickSeed: 11, confidence: "UPSET", note: "Louisville's Mikel Brown Jr. is hurt (back). USF won the AAC. Classic upset spot." },
      { seed1: 3, team1: "Michigan State", seed2: 14, team2: "N. Dakota St.", pick: "Michigan State", pickSeed: 3, confidence: "LOCK", note: "Izzo's 28th straight tourney. NDSU won 27 (program record) but gap is too wide." },
      { seed1: 7, team1: "UCLA", seed2: 10, team2: "UCF", pick: "UCLA", pickSeed: 7, confidence: "COIN FLIP", note: "Tight matchup. UCLA's experience gets the nod but barely." },
      { seed1: 2, team1: "UConn", seed2: 15, team2: "Furman", pick: "UConn", pickSeed: 2, confidence: "LOCK", note: "Hurley is 17-3 ATS (85%) in the NCAA Tournament — best of any coach since '85." },
    ],
    r32: [
      { matchup: "(1) Duke vs (8) Ohio State", pick: "Duke", confidence: "LOCK", note: "OSU won't have the shooting to keep up with Duke's frontcourt. Boozer goes for 25+ and Duke cruises by 15+. No 8-seed has beaten a 1-seed in the R32 since 2023." },
      { matchup: "(4) Kansas vs (5) St. John's", pick: "Kansas", confidence: "LEAN", note: "Pitino vs Self — two of the greatest tourney coaches ever. But Peterson is the best player on the floor and KU's length disrupts St. John's inside-out game." },
      { matchup: "(3) Michigan State vs (11) South Florida", pick: "Michigan State", confidence: "LOCK", note: "USF's Cinderella run ends here. Izzo is an all-time great second-weekend coach. Spartans' defensive versatility smothers USF's tempo." },
      { matchup: "(2) UConn vs (7) UCLA", pick: "UConn", confidence: "LEAN", note: "UConn's championship pedigree matters. Hurley's teams defend at an elite level and get to the line. UCLA hangs around but UConn pulls away late." },
    ],
    s16: [
      { matchup: "(1) Duke vs (4) Kansas", pick: "Duke", confidence: "LEAN", note: "🔥 GAME OF THE TOURNEY: Boozer vs Peterson — the two best freshmen in America. Duke's defense is slightly better and they have more weapons. Duke survives in a classic, but Kansas covers." },
      { matchup: "(2) UConn vs (3) Michigan State", pick: "UConn", confidence: "LEAN", note: "Izzo owns this round historically but UConn is battle-tested. Hurley out-adjusts Izzo in a half-court grind. UConn's guard play makes the difference late." },
    ],
    e8: [
      { matchup: "(1) Duke vs (2) UConn", pick: "Duke", confidence: "LEAN", note: "Two blue bloods for a trip to Indy. Duke's size advantage is decisive — Boozer dominates the paint. Scheyer gets his first Final Four. UConn's three-peat bid ends." },
    ],
    ffTeam: "Duke",
  },
  south: {
    name: "SOUTH",
    city: "Houston, TX",
    venue: "Toyota Center",
    accent: "#ef4444",
    r64: [
      { seed1: 1, team1: "Florida", seed2: 16, team2: "PV A&M/Lehigh", pick: "Florida", pickSeed: 1, confidence: "LOCK", note: "Defending champs. 1-seeds are 158-2 all-time in R64." },
      { seed1: 8, team1: "Georgia", seed2: 9, team2: "Saint Louis", pick: "Georgia", pickSeed: 8, confidence: "COIN FLIP", note: "True toss-up. Georgia's SEC experience gives slight edge." },
      { seed1: 5, team1: "Vanderbilt", seed2: 12, team2: "McNeese", pick: "Vanderbilt", pickSeed: 5, confidence: "LEAN", note: "McNeese won as a 12 last year but Vandy's Tanner (19.2 ppg) and Miles protect the ball too well." },
      { seed1: 4, team1: "Nebraska", seed2: 13, team2: "Troy", pick: "Nebraska", pickSeed: 4, confidence: "LEAN", note: "Nebraska started 20-0 then went 6-6. Concerning but Troy can't match the talent." },
      { seed1: 6, team1: "North Carolina", seed2: 11, team2: "VCU", pick: "VCU", pickSeed: 11, confidence: "UPSET", note: "UNC inconsistent and banged up. VCU thrives in transition chaos. ESPN BPI prime upset spot." },
      { seed1: 3, team1: "Illinois", seed2: 14, team2: "Penn", pick: "Illinois", pickSeed: 3, confidence: "LOCK", note: "Keaton Wagler is a projected top-6 NBA pick. Way too much talent for Penn." },
      { seed1: 7, team1: "Saint Mary's", seed2: 10, team2: "Texas A&M", pick: "Texas A&M", pickSeed: 10, confidence: "UPSET", note: "A&M ranks 9th in PPG (87.7) and will push pace on the slow Gaels. SportsLine model backs A&M." },
      { seed1: 2, team1: "Houston", seed2: 15, team2: "Idaho", pick: "Houston", pickSeed: 2, confidence: "LOCK", note: "Big Sky is 3-36 all-time in R64. Houston plays Sweet 16 at home at Toyota Center." },
    ],
    r32: [
      { matchup: "(1) Florida vs (8) Georgia", pick: "Florida", confidence: "LOCK", note: "All-SEC matchup. Florida has been here before — literally won it all last year. Gators' experience and depth are overwhelming. Georgia keeps it close for a half before Florida pulls away." },
      { matchup: "(4) Nebraska vs (5) Vanderbilt", pick: "Vanderbilt", confidence: "LEAN", note: "💥 BRACKET-BUSTER: Nebraska's 6-6 finish is a massive red flag. Vandy's Tyler Tanner is having an All-American season (19.2 ppg, 5.3 ast, 37% from 3). Better team regardless of seeding." },
      { matchup: "(3) Illinois vs (11) VCU", pick: "Illinois", confidence: "LOCK", note: "VCU's Cinderella run ends against the Illini's NBA talent. Wagler is too much. Illinois' half-court efficiency overcomes VCU's chaos over 40 minutes." },
      { matchup: "(2) Houston vs (10) Texas A&M", pick: "Houston", confidence: "LOCK", note: "A&M pushed tempo on Saint Mary's but Houston's defense is a different animal. Cougars lock down in the half-court. Kingston Flemings goes off." },
    ],
    s16: [
      { matchup: "(1) Florida vs (5) Vanderbilt", pick: "Florida", confidence: "LEAN", note: "SEC rivals who split the regular season. Florida's depth and championship DNA separate them. Tanner gets his but Gators have answers at every position. Vandy covers." },
      { matchup: "(2) Houston vs (3) Illinois", pick: "Houston", confidence: "LEAN", note: "🏠 HOME COURT: Toyota Center — Houston's backyard. 90% Cougar fans. Flemings vs Wagler is an NBA scout's dream. Houston's D suffocates Illinois and the crowd carries them." },
    ],
    e8: [
      { matchup: "(1) Florida vs (2) Houston", pick: "Houston", confidence: "LEAN", note: "💥 THE 2-SEED TAKES DOWN THE DEFENDING CHAMP. Florida beat Houston for the title last year, but this time it's on Houston's home floor. Flemings drops 28 in an instant classic. Home-court is the deciding factor." },
    ],
    ffTeam: "Houston",
  },
  midwest: {
    name: "MIDWEST",
    city: "Chicago, IL",
    venue: "United Center",
    accent: "#a855f7",
    r64: [
      { seed1: 1, team1: "Michigan", seed2: 16, team2: "Howard", pick: "Michigan", pickSeed: 1, confidence: "LOCK", note: "Michigan tops nearly every rating system. Lendeborg, Johnson, Mara form the nation's best frontcourt." },
      { seed1: 8, team1: "Clemson", seed2: 9, team2: "Iowa", pick: "Iowa", pickSeed: 9, confidence: "LEAN", note: "Bennett Stirtz controls tempo like no one else. Iowa has the better backcourt." },
      { seed1: 5, team1: "Texas Tech", seed2: 12, team2: "Akron", pick: "Akron", pickSeed: 12, confidence: "UPSET", note: "⭐ TOP UPSET: JT Toppin OUT (ACL). Tech lost 3 straight. Akron 19-of-20, most popular upset pick (22.8% of Yahoo brackets)." },
      { seed1: 4, team1: "Alabama", seed2: 13, team2: "Hofstra", pick: "Alabama", pickSeed: 4, confidence: "LEAN", note: "AJ Dybantsa (top-3 pick) is dominant. Lost Saunders to ACL but talent wins vs Hofstra." },
      { seed1: 6, team1: "Tennessee", seed2: 11, team2: "Texas/Miami(OH)", pick: "Tennessee", pickSeed: 6, confidence: "LEAN", note: "Barnes in his 30th tourney. Gillespie-Ament duo is dangerous. Miami (OH) 31-1 but schedule concerns are real." },
      { seed1: 3, team1: "Virginia", seed2: 14, team2: "Wright State", pick: "Virginia", pickSeed: 3, confidence: "LOCK", note: "Horizon League 1-12 in R64 since 2012. UVA has Thomas + de Ridder." },
      { seed1: 7, team1: "Kentucky", seed2: 10, team2: "Santa Clara", pick: "Santa Clara", pickSeed: 10, confidence: "UPSET", note: "UK has 13 losses, 4 to unranked teams. Santa Clara goes 9 deep and launches threes." },
      { seed1: 2, team1: "Iowa State", seed2: 15, team2: "Tennessee State", pick: "Iowa State", pickSeed: 2, confidence: "LOCK", note: "Bettors love this draw. ISU's swarming defense will suffocate TSU." },
    ],
    r32: [
      { matchup: "(1) Michigan vs (9) Iowa", pick: "Michigan", confidence: "LOCK", note: "Big Ten rivals but Michigan is a different level. Stirtz is brilliant but can't guard Lendeborg, Johnson, AND Mara. Michigan's frontcourt outrebounds Iowa by double digits." },
      { matchup: "(4) Alabama vs (12) Akron", pick: "Alabama", confidence: "LEAN", note: "Akron's magical run ends. Dybantsa is too talented to contain. Zips shoot well from 3 and keep it single digits, but Bama's athleticism wears them down. Credit to Groce — Akron exceeded all expectations." },
      { matchup: "(3) Virginia vs (6) Tennessee", pick: "Virginia", confidence: "COIN FLIP", note: "Tightest R32 game in the bracket. Two defensive teams with elite 1-2 punches (Thomas/de Ridder vs Gillespie/Ament). UVA's pack-line D slows tempo. Slight edge to discipline." },
      { matchup: "(2) Iowa State vs (10) Santa Clara", pick: "Iowa State", confidence: "LOCK", note: "Santa Clara's 3-point barrage runs into the nation's most disruptive perimeter defense. ISU forces 18+ turnovers and runs out in transition." },
    ],
    s16: [
      { matchup: "(1) Michigan vs (4) Alabama", pick: "Michigan", confidence: "LOCK", note: "Alabama thrives in chaos and transition but Michigan controls the boards (top-10 nationally). Dybantsa scores 25 but Lendeborg matches him and Michigan's depth wears Bama down." },
      { matchup: "(2) Iowa State vs (3) Virginia", pick: "Iowa State", confidence: "LEAN", note: "Style clash of the tourney: ISU pressure vs UVA methodical pace. Iowa State's turnover-forcing negates Virginia's ball screens. Otzelberger's squad has been peaking since bracket day." },
    ],
    e8: [
      { matchup: "(1) Michigan vs (2) Iowa State", pick: "Michigan", confidence: "LEAN", note: "The Wolverines' toughest test. ISU's pressure has broken everyone, but Michigan's veteran guards (Cadeau from UNC) handle it better than anyone. Lendeborg goes 22/12. May proves he belongs." },
    ],
    ffTeam: "Michigan",
  },
  west: {
    name: "WEST",
    city: "San Jose, CA",
    venue: "SAP Center",
    accent: "#22c55e",
    r64: [
      { seed1: 1, team1: "Arizona", seed2: 16, team2: "LIU", pick: "Arizona", pickSeed: 1, confidence: "LOCK", note: "Biggest favorite (-30.5). Won Big 12 tourney. Burries is a top-10 NBA prospect." },
      { seed1: 8, team1: "Villanova", seed2: 9, team2: "Utah State", pick: "Utah State", pickSeed: 9, confidence: "LEAN", note: "Utah State's revenge MWC tourney run has them peaking. Best 9-seed in the field." },
      { seed1: 5, team1: "Wisconsin", seed2: 12, team2: "High Point", pick: "Wisconsin", pickSeed: 5, confidence: "LEAN", note: "High Point (30-4, +19.7 pt diff) is legit but Wisconsin avoids turnovers better than anyone — that's HP's weapon." },
      { seed1: 4, team1: "Arkansas", seed2: 13, team2: "Hawai'i", pick: "Arkansas", pickSeed: 4, confidence: "LEAN", note: "Calipari's high-seed curse lurks (7 of last 7 tourneys had a 13-over-4) but Hawai'i isn't the one." },
      { seed1: 6, team1: "BYU", seed2: 11, team2: "Texas", pick: "Texas", pickSeed: 11, confidence: "UPSET", note: "First Four winners advance in 12 of 14 years. BYU missing key pieces. Texas has more talent." },
      { seed1: 3, team1: "Gonzaga", seed2: 14, team2: "Kennesaw St.", pick: "Gonzaga", pickSeed: 3, confidence: "LOCK", note: "Top-3 seed first time since 2023. Too much firepower." },
      { seed1: 7, team1: "Miami (Fla.)", seed2: 10, team2: "Missouri", pick: "Missouri", pickSeed: 10, confidence: "LEAN", note: "SEC depth showing. Mizzou's physicality will be a problem for Miami." },
      { seed1: 2, team1: "Purdue", seed2: 15, team2: "Queens", pick: "Purdue", pickSeed: 2, confidence: "LOCK", note: "Painter 13-4 ATS (76.5%) in R64 — best ever. Braden Smith breaks Hurley's assist record." },
    ],
    r32: [
      { matchup: "(1) Arizona vs (9) Utah State", pick: "Arizona", confidence: "LOCK", note: "Utah State played great to get here but Arizona is another stratosphere. Burries, Bradley, and Peat — three NBA prospects in the starting 5. Arizona wins by 20." },
      { matchup: "(4) Arkansas vs (5) Wisconsin", pick: "Wisconsin", confidence: "LEAN", note: "💥 BRACKET-BUSTER: Highest-scoring Badgers team of the Gard era. Blackwell + Boyd combined 50 PPG over last 4. Calipari's Arkansas is a rollercoaster — Wisconsin's discipline wins." },
      { matchup: "(3) Gonzaga vs (11) Texas", pick: "Gonzaga", confidence: "LEAN", note: "Texas' Cinderella story ends against Gonzaga's firepower. Few always has his teams ready for the second weekend. Fun run, but the Bulldogs' talent wins." },
      { matchup: "(2) Purdue vs (10) Missouri", pick: "Purdue", confidence: "LOCK", note: "Braden Smith orchestrates, Painter out-coaches. Missouri's physicality is neutralized by Purdue's size. Smith officially breaks the all-time assist record." },
    ],
    s16: [
      { matchup: "(1) Arizona vs (5) Wisconsin", pick: "Arizona", confidence: "LEAN", note: "Wisconsin's methodical approach tests Arizona's patience, but the Wildcats have too many athletes. Burries goes for 28. Arizona's depth wears down the Badgers in the final 10." },
      { matchup: "(2) Purdue vs (3) Gonzaga", pick: "Purdue", confidence: "LEAN", note: "Two elite offensive teams in a shootout. Smith vs Gonzaga's guards — Smith is the best floor general in America. Purdue's rebounding edge is the difference." },
    ],
    e8: [
      { matchup: "(1) Arizona vs (2) Purdue", pick: "Arizona", confidence: "LEAN", note: "Game of the Elite 8. Both elite offenses, but Arizona's defensive versatility and guard play are the separators. Jaden Bradley hits a clutch three (Big 12 tourney vibes). Arizona to the Final Four." },
    ],
    ffTeam: "Arizona",
  },
};

const finalFour = {
  semi1: { matchup: "(1) Duke vs (2) Houston", pick: "Duke", note: "Boozer vs Flemings is the NBA Draft preview of the year. Houston's D is suffocating but Duke has more weapons. When Houston locks one down, Duke has three more. Scheyer's squad survives 68-62." },
  semi2: { matchup: "(1) Arizona vs (1) Michigan", pick: "Michigan", note: "Best frontcourt matchup of the tournament. Arizona's guards are elite but Michigan's size inside (Lendeborg + Johnson + Mara) controls the paint. Michigan wins the board battle 40-28 and advances 74-69." },
  championship: { matchup: "(1) Duke vs (1) Michigan", pick: "Michigan", note: "Both top-2 in KenPom. Boozer gets 28, but Michigan's frontcourt depth wears Duke down in the second half — Lendeborg, Johnson, and Mara rotate fresh legs while Duke's bigs fatigue. Michigan goes on a 12-2 run with 6 minutes left. Lendeborg earns MOP. Dusty May delivers Michigan's first title since 1989." },
};

function ConfBadge({ confidence }) {
  const styles = {
    "LOCK": { bg: "#166534", text: "#bbf7d0", label: "🔒 LOCK" },
    "LEAN": { bg: "#1e3a5f", text: "#bae6fd", label: "📊 LEAN" },
    "UPSET": { bg: "#7c2d12", text: "#fed7aa", label: "💥 UPSET" },
    "COIN FLIP": { bg: "#4a4a4a", text: "#d4d4d4", label: "🎲 FLIP" },
  };
  const s = styles[confidence] || styles["LEAN"];
  return (
    <span style={{ background: s.bg, color: s.text, padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", whiteSpace: "nowrap" }}>
      {s.label}
    </span>
  );
}

function GameCard({ game, accent }) {
  const isUpset = game.confidence === "UPSET" || (game.note && game.note.includes("💥"));
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: isUpset ? "1px solid rgba(239,68,68,0.3)" : "1px solid rgba(255,255,255,0.08)",
      borderRadius: "8px",
      padding: "12px 14px",
      marginBottom: "8px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
        <div style={{ fontSize: "14px", color: "#cbd5e1", fontWeight: 500 }}>
          {game.matchup || `(${game.seed1}) ${game.team1} vs (${game.seed2}) ${game.team2}`}
        </div>
        <ConfBadge confidence={game.confidence} />
      </div>
      <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.55" }}>
        → <strong style={{ color: accent }}>{game.pick}</strong> — {game.note}
      </div>
    </div>
  );
}

const titleOdds = [
  { team: "Duke", odds: "+325", implied: "23.5%", seed: "1 (East)" },
  { team: "Michigan", odds: "+350", implied: "22.2%", seed: "1 (Midwest)", myPick: true },
  { team: "Arizona", odds: "+380", implied: "20.8%", seed: "1 (West)" },
  { team: "Florida", odds: "+750", implied: "11.8%", seed: "1 (South)" },
  { team: "Iowa State", odds: "+1800", implied: "5.3%", seed: "2 (Midwest)" },
  { team: "UConn", odds: "+2200", implied: "4.3%", seed: "2 (East)" },
  { team: "Houston", odds: "+2500", implied: "3.8%", seed: "2 (South)" },
  { team: "Kansas", odds: "+4000", implied: "2.4%", seed: "4 (East)" },
  { team: "Purdue", odds: "+4500", implied: "2.2%", seed: "2 (West)" },
];

const keyTrends = [
  { stat: "1-seeds in R64", value: "158-2", note: "98.9% win rate since 1985" },
  { stat: "12-over-5 upsets", value: "35.6%", note: "57 wins since 1985 — at least one in 34 of 40 tourneys" },
  { stat: "13-over-4 upsets", value: "12/17", note: "In 12 of last 17 tourneys at least one 13 beat a 4" },
  { stat: "Dogs ATS since '15", value: "162-152", note: "51.6% cover — slight edge to underdogs" },
  { stat: "First Four → R32", value: "12/14", note: "First Four winners frequently advance again" },
  { stat: "Champs as 1-seeds", value: "60%", note: "28 of 47 champs since seeding began in '79" },
  { stat: "20+ pt dogs ATS", value: "51.9%", note: "94-87-3 — big underdogs cover more often than not" },
  { stat: "DD seed in S16", value: "17 straight", note: "At least 1 double-digit seed in S16 each yr since '08" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("bracket");
  const [activeRegion, setActiveRegion] = useState("east");
  const [activeRound, setActiveRound] = useState("r64");

  const reg = roundData[activeRegion];

  const roundMeta = {
    r64: { label: "Round of 64", emoji: "1️⃣", count: reg.r64.length },
    r32: { label: "Round of 32", emoji: "2️⃣", count: reg.r32.length },
    s16: { label: "Sweet 16", emoji: "🍬", count: reg.s16.length },
    e8: { label: "Elite 8", emoji: "🔥", count: reg.e8.length },
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e17",
      color: "#e2e8f0",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 20px 14px",
      }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
            <span style={{ fontSize: "26px" }}>🏀</span>
            <div>
              <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 700, letterSpacing: "-0.5px", color: "#fff" }}>
                MARCH MADNESS 2026 — THE FULL BOOK
              </h1>
              <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#94a3b8" }}>
                Every round, every game • Vegas-style analytics • March 19, 2026
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px", marginTop: "14px", flexWrap: "wrap" }}>
            {[
              { id: "bracket", label: "📋 Full Bracket" },
              { id: "final4", label: "🏆 Final Four & Title" },
              { id: "upsets", label: "💥 Upset Board" },
              { id: "odds", label: "📈 Odds & Trends" },
            ].map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                background: activeTab === t.id ? "rgba(255,255,255,0.12)" : "transparent",
                border: "1px solid " + (activeTab === t.id ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"),
                color: activeTab === t.id ? "#fff" : "#64748b",
                padding: "7px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "16px 20px" }}>
        {activeTab === "bracket" && (
          <div>
            <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
              {Object.entries(roundData).map(([key, r]) => (
                <button key={key} onClick={() => { setActiveRegion(key); setActiveRound("r64"); }} style={{
                  flex: 1,
                  background: activeRegion === key ? r.accent + "22" : "transparent",
                  border: "1px solid " + (activeRegion === key ? r.accent + "66" : "rgba(255,255,255,0.08)"),
                  color: activeRegion === key ? r.accent : "#64748b",
                  padding: "8px 6px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "center",
                }}>
                  {r.name}
                  <div style={{ fontSize: "9px", fontWeight: 400, marginTop: "1px", opacity: 0.7 }}>{r.city}</div>
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {Object.entries(roundMeta).map(([key, m]) => (
                <button key={key} onClick={() => setActiveRound(key)} style={{
                  flex: 1,
                  background: activeRound === key ? "rgba(255,255,255,0.1)" : "transparent",
                  border: "1px solid " + (activeRound === key ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"),
                  color: activeRound === key ? "#fff" : "#475569",
                  padding: "8px 6px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "center",
                }}>
                  {m.emoji} {m.label}
                  <div style={{ fontSize: "9px", opacity: 0.6, marginTop: "1px" }}>{m.count} game{m.count > 1 ? "s" : ""}</div>
                </button>
              ))}
            </div>

            <div style={{
              background: reg.accent + "11",
              border: "1px solid " + reg.accent + "33",
              borderRadius: "10px",
              padding: "14px",
              marginBottom: "14px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "10px", color: reg.accent, fontWeight: 700, letterSpacing: "1px" }}>{reg.name} REGION — {reg.venue}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginTop: "2px" }}>Final Four Pick: {reg.ffTeam}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "10px", color: "#64748b" }}>BRACKET PATH</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>
                    S16: {reg.s16.map(g => g.pick).join(" • ")}
                  </div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                    E8: {reg.e8[0].pick} → FF
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "11px", color: reg.accent, fontWeight: 700, letterSpacing: "1.5px", marginBottom: "8px" }}>
              {roundMeta[activeRound].emoji} {roundMeta[activeRound].label.toUpperCase()}
            </div>
            {reg[activeRound].map((g, i) => <GameCard key={i} game={g} accent={reg.accent} />)}
          </div>
        )}

        {activeTab === "final4" && (
          <div>
            <div style={{
              background: "linear-gradient(135deg, rgba(234,179,8,0.08), rgba(234,179,8,0.02))",
              border: "1px solid rgba(234,179,8,0.25)",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "10px", color: "#eab308", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "6px" }}>🏆 NATIONAL CHAMPION</div>
              <div style={{ fontSize: "32px", fontWeight: 700, color: "#fff", letterSpacing: "-1px" }}>MICHIGAN</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>1-seed (Midwest) • +350 • Dusty May's first title</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
              {[
                { team: "Duke", seed: "1 (East)", odds: "+325", color: "#3b82f6", note: "#1 KenPom. Boozer is generational. Toughest path but best single player." },
                { team: "Houston", seed: "2 (South)", odds: "+2500", color: "#ef4444", note: "Home-court through E8 at Toyota Center. Flemings + last year's F4 core." },
                { team: "Michigan", seed: "1 (Midwest)", odds: "+350", color: "#a855f7", note: "Easiest draw. Healthiest. Best frontcourt in America." },
                { team: "Arizona", seed: "1 (West)", odds: "+380", color: "#22c55e", note: "Won 9 straight + Big 12 tourney. Travel edge. Deepest starting 5." },
              ].map((t, i) => (
                <div key={i} style={{
                  background: t.color + "11", border: "1px solid " + t.color + "44",
                  borderRadius: "10px", padding: "12px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{t.team}</span>
                    <span style={{ fontSize: "11px", color: t.color, fontFamily: "monospace" }}>{t.odds}</span>
                  </div>
                  <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "4px" }}>{t.seed}</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8", lineHeight: "1.4" }}>{t.note}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600, letterSpacing: "1px", marginBottom: "10px" }}>FINAL FOUR — LUCAS OIL STADIUM</div>
              {[
                { label: "SEMI 1 (East vs South)", ...finalFour.semi1, color: "#3b82f6" },
                { label: "SEMI 2 (West vs Midwest)", ...finalFour.semi2, color: "#a855f7" },
              ].map((g, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "12px", marginBottom: "8px" }}>
                  <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "3px" }}>{g.label}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700 }}>{g.matchup}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px", lineHeight: "1.5" }}>
                    → <strong style={{ color: g.color }}>{g.pick} advances.</strong> {g.note}
                  </div>
                </div>
              ))}
              <div style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.2)", borderRadius: "8px", padding: "14px" }}>
                <div style={{ fontSize: "11px", color: "#eab308", marginBottom: "3px" }}>CHAMPIONSHIP — APRIL 6</div>
                <div style={{ fontSize: "17px", fontWeight: 700 }}>{finalFour.championship.matchup}</div>
                <div style={{ fontSize: "12px", color: "#cbd5e1", marginTop: "6px", lineHeight: "1.55" }}>
                  → <strong style={{ color: "#eab308" }}>Michigan wins the national title.</strong> {finalFour.championship.note}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600, letterSpacing: "1px", marginBottom: "8px" }}>MICHIGAN'S PATH TO THE TITLE</div>
              {[
                { rd: "R64", opp: "Howard (16)", result: "W by 30+" },
                { rd: "R32", opp: "Iowa (9)", result: "W by 15 — frontcourt dominance" },
                { rd: "S16", opp: "Alabama (4)", result: "W by 8 — depth prevails over Dybantsa" },
                { rd: "E8", opp: "Iowa State (2)", result: "W by 5 — Lendeborg 22/12" },
                { rd: "F4", opp: "Arizona (1)", result: "W 74-69 — size wins the paint" },
                { rd: "FINAL", opp: "Duke (1)", result: "W — 12-2 run, Lendeborg MOP" },
              ].map((g, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "5px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#a855f7", minWidth: "36px", fontFamily: "monospace" }}>{g.rd}</span>
                  <span style={{ fontSize: "13px", color: "#cbd5e1", flex: 1 }}>vs {g.opp}</span>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>{g.result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "upsets" && (
          <div>
            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "10px", padding: "14px", marginBottom: "14px" }}>
              <div style={{ fontSize: "10px", color: "#ef4444", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>UPSET STRATEGY</div>
              <div style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.5" }}>
                <strong>6 first-round upsets</strong> by double-digit seeds (slightly above the ~5/yr avg) + <strong>3 later-round bracket-busters</strong>. Targeting injuries, coaching flags, and pace mismatches. 4–7 upsets is the optimal range.
              </div>
            </div>

            <div style={{ fontSize: "10px", color: "#ef4444", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px" }}>🔥 FIRST-ROUND UPSETS — RANKED</div>
            {[
              { n: 1, pick: "(12) Akron over (5) Texas Tech", reg: "MW", tag: "⭐ #1", conf: 85, why: "Toppin OUT (ACL). Tech lost 3 straight. Akron 19-of-20, 3 seniors shooting 37%+ from 3. Most popular upset nationally." },
              { n: 2, pick: "(11) VCU over (6) North Carolina", reg: "S", tag: "HIGH", conf: 72, why: "UNC banged up. VCU thrives in chaos. ESPN BPI prime upset spot." },
              { n: 3, pick: "(10) Texas A&M over (7) Saint Mary's", reg: "S", tag: "MODEL", conf: 68, why: "A&M 9th in PPG (87.7). Pushes pace on slow Gaels. SportsLine backs them." },
              { n: 4, pick: "(11) S. Florida over (6) Louisville", reg: "E", tag: "INJURY", conf: 65, why: "Brown Jr. hurt (back). USF won the AAC. 11s beat 6s 38.75% of the time." },
              { n: 5, pick: "(10) Santa Clara over (7) Kentucky", reg: "MW", tag: "TREND", conf: 62, why: "UK 13 losses, 4 to unranked. SCU goes 9 deep, ~1,000 three attempts." },
              { n: 6, pick: "(11) Texas over (6) BYU", reg: "W", tag: "FF BOUNCE", conf: 58, why: "First Four winners advance 12 of 14 times. BYU missing key players." },
            ].map((u, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "8px", padding: "11px 12px", marginBottom: "7px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#ef4444", fontSize: "14px", fontWeight: 700 }}>#{u.n}</span>
                    <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>{u.pick}</span>
                  </div>
                  <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <span style={{ background: "#7c2d1233", color: "#fca5a5", padding: "1px 5px", borderRadius: "3px", fontSize: "9px", fontWeight: 700 }}>{u.tag}</span>
                    <span style={{ color: "#64748b", fontSize: "10px", fontFamily: "monospace" }}>{u.reg}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <div style={{ flex: 1, height: "5px", background: "#1e293b", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: `${u.conf}%`, height: "100%", background: "linear-gradient(90deg, #ef4444, #f97316)", borderRadius: "3px" }} />
                  </div>
                  <span style={{ color: "#f97316", fontSize: "11px", fontWeight: 700, fontFamily: "monospace" }}>{u.conf}%</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: "11px", lineHeight: "1.4" }}>{u.why}</div>
              </div>
            ))}

            <div style={{ fontSize: "10px", color: "#fbbf24", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px", marginTop: "16px" }}>🔮 LATER-ROUND BRACKET-BUSTERS</div>
            {[
              { pick: "(5) Vanderbilt over (4) Nebraska", rd: "R32 — South", why: "Nebraska 6-6 down the stretch. Vandy's Tanner (19.2 ppg, 5.3 ast) is the better player. Better team regardless of seed." },
              { pick: "(5) Wisconsin over (4) Arkansas", rd: "R32 — West", why: "Highest-scoring Badgers team in Gard era. Blackwell + Boyd avg 50 combined last 4. Arkansas is a rollercoaster under Calipari." },
              { pick: "(2) Houston over (1) Florida", rd: "Elite 8 — South", why: "Revenge game. Florida won the title over Houston last year. This time it's at Toyota Center — Houston's home arena. Crowd + motivation = 2-seed toppling the defending champs." },
            ].map((u, i) => (
              <div key={i} style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.15)", borderRadius: "8px", padding: "11px 12px", marginBottom: "7px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                  <span style={{ color: "#fbbf24", fontSize: "13px", fontWeight: 700 }}>{u.pick}</span>
                  <span style={{ color: "#64748b", fontSize: "10px" }}>{u.rd}</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: "11px", lineHeight: "1.4" }}>{u.why}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "odds" && (
          <div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600, letterSpacing: "1px", marginBottom: "8px" }}>CHAMPIONSHIP ODDS (DRAFTKINGS / BETMGM)</div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", overflow: "hidden", marginBottom: "16px" }}>
              {titleOdds.map((t, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", padding: "9px 12px",
                  borderBottom: i < titleOdds.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background: t.myPick ? "rgba(234,179,8,0.06)" : "transparent",
                }}>
                  <span style={{ color: "#64748b", fontSize: "11px", fontFamily: "monospace", minWidth: "22px" }}>{i + 1}.</span>
                  <span style={{ color: t.myPick ? "#eab308" : "#fff", fontWeight: 600, fontSize: "13px", flex: 1 }}>
                    {t.team} {t.myPick && "← PICK"}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "11px", marginRight: "12px" }}>{t.seed}</span>
                  <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: 700, fontFamily: "'DM Mono', monospace", minWidth: "55px", textAlign: "right" }}>{t.odds}</span>
                  <span style={{ color: "#64748b", fontSize: "10px", marginLeft: "10px", minWidth: "44px", textAlign: "right" }}>{t.implied}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600, letterSpacing: "1px", marginBottom: "8px" }}>KEY TRENDS</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
              {keyTrends.map((t, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px" }}>
                  <div style={{ fontSize: "9px", color: "#64748b", fontWeight: 600, letterSpacing: "0.5px" }}>{t.stat}</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#fff", fontFamily: "'DM Mono', monospace" }}>{t.value}</div>
                  <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "1px" }}>{t.note}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "10px", padding: "14px" }}>
              <div style={{ fontSize: "10px", color: "#3b82f6", fontWeight: 700, letterSpacing: "1px", marginBottom: "6px" }}>📊 KENPOM CHAMPIONSHIP PROFILE</div>
              <div style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: "1.55" }}>
                23 of 24 champs since 2001 ranked top-21 in adj. offensive efficiency AND top-31 in adj. defensive efficiency. 8 teams fit both: <strong>Duke, Michigan, Arizona, Florida, Iowa State, Illinois, Vanderbilt, Louisville.</strong>
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "6px" }}>
                <strong style={{ color: "#fbbf24" }}>Key:</strong> 10 of 12 recent champs had odds of +450 or longer. Michigan at +350 is close — supporting a near-favorite pick over pure chalk.
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: "20px", padding: "14px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <div style={{ fontSize: "10px", color: "#475569" }}>
            Data: DraftKings, BetMGM, KenPom, ESPN BPI, SportsLine, Nate Silver/COOPER, FOX Sports • For entertainment only 🏆
          </div>
        </div>
      </div>
    </div>
  );
}
