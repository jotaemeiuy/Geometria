const STORAGE_KEY = 'geometria-progress';

export interface ProgressData {
  completedLessons: string[];
  lastVisited: string | null;
}

export function getProgress(): ProgressData {
  if (typeof localStorage === 'undefined') {
    return { completedLessons: [], lastVisited: null };
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { completedLessons: [], lastVisited: null };
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return { completedLessons: [], lastVisited: null };
  }
}

export function saveProgress(progress: ProgressData): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isLessonCompleted(sectionSlug: string, lessonSlug: string): boolean {
  const progress = getProgress();
  const lessonId = `${sectionSlug}/${lessonSlug}`;
  return progress.completedLessons.includes(lessonId);
}

export function markLessonCompleted(sectionSlug: string, lessonSlug: string): void {
  const progress = getProgress();
  const lessonId = `${sectionSlug}/${lessonSlug}`;
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
}

export function markLessonIncomplete(sectionSlug: string, lessonSlug: string): void {
  const progress = getProgress();
  const lessonId = `${sectionSlug}/${lessonSlug}`;
  
  progress.completedLessons = progress.completedLessons.filter(id => id !== lessonId);
  saveProgress(progress);
}

export function setLastVisited(sectionSlug: string, lessonSlug: string): void {
  const progress = getProgress();
  progress.lastVisited = `${sectionSlug}/${lessonSlug}`;
  saveProgress(progress);
}

export function getCompletedCount(): number {
  return getProgress().completedLessons.length;
}

export function getProgressPercentage(totalLessons: number): number {
  if (totalLessons === 0) return 0;
  return Math.round((getCompletedCount() / totalLessons) * 100);
}
