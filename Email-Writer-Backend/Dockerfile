# ---------- Build stage ----------
FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

# Copy Maven files first for caching
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Package without tests
RUN ./mvnw clean package -DskipTests

# ---------- Run stage ----------
FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
