// ─── KPI types ────────────────────────────────────────────────────────────
export interface KpiSnapshot {
  totalThroughput: number;
  throughputChange: string;
  errorRate: number;
  errorRateChange: string;
  teamEfficiency: number;
  teamEfficiencyChange: string;
  capacityUtilization: number;
  capacityUtilizationChange: string;
}

// ─── Throughput ───────────────────────────────────────────────────────────
export interface HourlyPoint  { time: string; value: number; }
export interface DailyPoint   { date: string; value: number; }
export interface ProcessShare {
  process: string;
  value: number;
  percentage: number;
}

export interface ThroughputData {
  hourly:    HourlyPoint[];
  daily:     DailyPoint[];
  byProcess: ProcessShare[];
}

// ─── Errors ───────────────────────────────────────────────────────────────
export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface ErrorClassification {
  type:       string;
  count:      number;
  percentage: number;
}

export interface ErrorSeverity {
  level:      Severity;
  count:      number;
  percentage: number;
}

export interface ErrorTrendPoint { date: string; value: number; }

export interface ResolutionByType { type: string; time: number; }

export interface ResolutionTime {
  average: number;
  target:  number;
  byType:  ResolutionByType[];
}

export interface ErrorData {
  classification: ErrorClassification[];
  severity:       ErrorSeverity[];
  trends:         ErrorTrendPoint[];
  resolutionTime: ResolutionTime;
}

// ─── Team ─────────────────────────────────────────────────────────────────
export interface TeamMember {
  name:          string;
  avatar:        string;
  productivity:  number;
  tasksCompleted:number;
  avgTaskTime:   number;
}

export interface ProductivityPoint { date: string; value: number; }

export interface UtilizationRow {
  member: string;
  mon: number; tue: number; wed: number; thu: number; fri: number;
}

export interface TeamData {
  members:      TeamMember[];
  productivity: ProductivityPoint[];
  utilization:  UtilizationRow[];
}

// ─── Capacity ─────────────────────────────────────────────────────────────
export type BottleneckSeverity = 'high' | 'medium' | 'low';
export type RecommendationPriority = 'high' | 'medium' | 'low';

export interface ForecastPoint {
  date:       string;
  predicted:  number;
  actual:     number | null;
  confidence: number;
}

export interface HistoricalPoint {
  date:      string;
  predicted: number;
  actual:    number;
}

export interface Bottleneck {
  resource:    string;
  utilization: number;
  severity:    BottleneckSeverity;
}

export interface Recommendation {
  type:     string;
  resource: string;
  priority: RecommendationPriority;
  impact:   string;
}

export interface CapacityData {
  forecast:        ForecastPoint[];
  historical:      HistoricalPoint[];
  bottlenecks:     Bottleneck[];
  recommendations: Recommendation[];
}

// ─── Alerts ───────────────────────────────────────────────────────────────
export type AlertPriority = 'high' | 'medium' | 'low';
export type AlertStatus   = 'active' | 'acknowledged';

export interface Alert {
  id:        number;
  message:   string;
  priority:  AlertPriority;
  timestamp: string;
  status:    AlertStatus;
}

export interface AlertHistoryPoint {
  date:     string;
  total:    number;
  resolved: number;
  pending:  number;
}

export interface ThresholdConfig {
  metric:    string;
  threshold: number;
  current:   number;
  status:    'ok' | 'warning' | 'critical';
}

export interface AlertsData {
  active:     Alert[];
  history:    AlertHistoryPoint[];
  thresholds: ThresholdConfig[];
}

// ─── Root ─────────────────────────────────────────────────────────────────
export interface AppData {
  kpis:          KpiSnapshot;
  throughputData:ThroughputData;
  errorData:     ErrorData;
  teamData:      TeamData;
  capacityData:  CapacityData;
  alertsData:    AlertsData;
}
