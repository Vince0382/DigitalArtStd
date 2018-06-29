FROM microsoft/dotnet:2.1-sdk
COPY . /app
WORKDIR /app
ENV ASPNETCORE_URLS http://*:7500
EXPOSE 7500
ENTRYPOINT ["dotnet", "DigitalArtStd.dll"]